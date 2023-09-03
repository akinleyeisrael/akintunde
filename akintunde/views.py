from django.shortcuts import redirect, render, get_object_or_404
from django.contrib import messages
from django.contrib.auth import login, logout
from django.core.mail import send_mail
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import About, Gallery, Category, Blog, Video, Exhibition
from django.http import HttpResponse
from .forms import (
    AboutForm,
    GalleryForm,
    CategoryForm,
    BlogForm,
    ContactForm,
    VideoForm,
)
from django.core.paginator import Paginator
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger
from django.template import RequestContext


# Create your views here.

# custom 404 view
def custom_404(request, exception):
    return render(request, 'akintunde/partial/404.html', status=404)

def loginPage(request):
    if request.user.is_authenticated:
        return redirect("home")

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, "")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            messages.success(request, f"You are logged in as {username}")
            return redirect("home")
        else:
            messages.error(request, "Username or password is incorrect")

    context = {}
    return render(request, "akintunde/login_register.html", context)


def logoutUser(request):
    logout(request)
    messages.success(request, "User logged out")
    return redirect("login")


def home(request):
    return render(request, "akintunde/home.html")


def about(request):
    about = About.objects.all()
    has_submissions = About.objects.exists()
    context = {"about": about, "has_submissions": has_submissions}
    return render(request, "akintunde/about.html", context)


# CRUD : ABOUT
@login_required(login_url="login")
def createAbout(request):
    form = AboutForm()
    if request.method == "POST":
        form = AboutForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("about")
    context = {"form": form}
    return render(request, "akintunde/about/create_form.html", context)


# EDIT -> ABOUT
@login_required(login_url="login")
def editAbout(request, pk):
    about = About.objects.get(id=pk)
    form = AboutForm(instance=about)

    if request.method == "POST":
        form = AboutForm(request.POST or None, instance=about)
        if form.is_valid():
            form.save()
            return redirect("about")
    context = {"form": form}
    return render(request, "akintunde/about/create_form.html", context)


@login_required(login_url="login")
def deleteAbout(request, pk):
    about = About.objects.get(id=pk)

    if request.method == "POST":
        about.delete()
        return redirect("about")
    return render(request, "akintunde/about/delete_form.html", {"obj": about})


# ========================================================================================================
# Gallery
# ========================================================================================================


def gallery(request):
    q = request.GET.get('q') if request.GET.get('q') != None else ''  #set q to empty
    gallery = Gallery.objects.filter(category__title__icontains=q)  #filter by category titile withou a case(upper or lower)
    categories = Category.objects.all()  # allow to use category in gallery
    context = {"gallery": gallery, "categories": categories}
    return render(request, "akintunde/gallery.html", context)


def galleryExtended (request,pk):
    gallery = get_object_or_404(Gallery, id=pk)
    categories = Category.objects.all()  # allow to use category in gallery
    context = {"gallery": gallery, "categories": categories}
    return render(request, "akintunde/gallery/gallery_extended.html", context)


@login_required(login_url="login")
def createGallery(request):
    categories = Category.objects.all()
    form = GalleryForm()
    if request.method == "POST":
        form = GalleryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("gallery")

    context = {"form": form, "categories": categories}
    return render(request, "akintunde/gallery/create_form.html", context)


@login_required(login_url="login")
def editGallery(request, pk):
    gallery = Gallery.objects.get(id=pk)
    form = GalleryForm(instance=gallery)
    categories = Category.objects.all()
    if request.method == "POST":
        form = GalleryForm(request.POST, request.FILES, instance=gallery)
        if form.is_valid():
            form.save()
            return redirect("gallery")
    context = {"form": form, "categories": categories}
    return render(request, "akintunde/gallery/create_form.html", context)


@login_required(login_url="login")
def deleteGallery(request, pk):
    gallery = Gallery.objects.get(id=pk)
    if request.method == "POST":
        gallery.delete()
        return redirect("gallery")
    return render(request, "akintunde/gallery/delete_form.html", {"obj": gallery})


# ========================================================================================================
# Categories
# ========================================================================================================
# edit/gallery/category
# already exists in the gallery
# def category(request):
#     categories = Category.objects.all()
#     context = {'categories': categories}
#     return render(request, 'akintunde/gallery.html', context)


@login_required(login_url="login")
def createCategory(request):
    form = CategoryForm()
    if request.method == "POST":
        form = CategoryForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect("gallery")  # redirect to gallery
    context = {"form": form}
    return render(request, "akintunde/category/create_form.html", context)


@login_required(login_url="login")
def editCategory(request, pk):
    categories = Category.objects.get(id=pk)
    form = CategoryForm(instance=categories)
    if request.method == "POST":
        form = CategoryForm(request.POST, instance=categories)
        if form.is_valid():
            form.save()
            return redirect("gallery")
    context = {"form": form}
    return render(request, "akintunde/category/create_form.html", context)


@login_required(login_url="login")
def deleteCategory(request, pk):
    categories = Category.objects.get(id=pk)
    if request.method == "POST":
        categories.delete()
        return redirect("gallery")
    return render(request, "akintunde/category/delete_form.html", {"obj": categories})


def blog(request):
    blogs = Blog.objects.all().order_by('-created')
    item_per_page = 6
    paginator = Paginator(blogs, item_per_page)
    page_number = request.GET.get('page', 1)  #get_current page num
    
    try:
        page = paginator.page(page_number)
    except PageNotAnInteger:
        page = paginator.page(1)
    except EmptyPage:
        page = paginator.page(paginator.num_pages)
    context = {"blogs": page}
    return render(request, "akintunde/blog.html", context)


def blogExtended(request, pk):
    blog = get_object_or_404(Blog,id=pk) 
    context = {"blog": blog}
    return render(request, "akintunde/blog/blog_extended.html", context)


@login_required(login_url="login")
def createBlog(request):
    form = BlogForm()
    if request.method == "POST":
        form = BlogForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect("blog")
    context = {"form": form}
    return render(request, "akintunde/blog/create_form.html", context)


@login_required(login_url="login")
def editBlog(request, pk):
    blog = Blog.objects.get(id=pk)
    form = BlogForm(instance=blog)
    if request.method == "POST":
        form = BlogForm(request.POST, request.FILES, instance=blog)
        if form.is_valid():
            form.save()
            return redirect("blog")
    context = {"form": form}
    return render(request, "akintunde/blog/create_form.html", context)


@login_required(login_url="login")
def deleteBlog(request, pk):
    blog = Blog.objects.get(id=pk)
    if request.method == "POST":
        blog.delete()
        return redirect("blog")
    return render(request, "akintunde/blog/delete_form.html", {"obj": blog})


# ================================================================
# CONTACT
# ================================================================


def contact(request):
    if request.method == "POST":
        form = ContactForm(request.POST)
        
        if form.is_valid():
            form.save()
            name = request.POST.get("name")
            email = request.POST.get("email")
            subject = request.POST.get("subject")
            message = request.POST.get("message")

            # email_from = form.cleaned_data.get("email")
            send_mail(
                subject,
                message,
                email,
                ["akinleyeisrael12@gmail.com"],
                fail_silently=False,
            )
            messages.success(request,"Thank you for contacting")
        else:
            messages.error(request,"Something went wrong.Try again") 
           
    return render(request, "akintunde/contact.html", {})


def videos(request):
    videos = Video.objects.all().order_by("-upload_date")
    context = {"videos": videos}
    return render(request, "akintunde/videos.html", context)


@login_required(login_url="login")
def upload_video(request):
    form = VideoForm()
    if request.method == "POST":
        form = VideoForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            messages.success(request, "Upload success")
            return redirect("videos")
    context = {"form": form}
    return render(request, "akintunde/video/upload_video.html", context)


@login_required(login_url="login")
def edit_video(request, pk):
    videos = Video.objects.get(id=pk)
    form = VideoForm(instance=videos)
    if request.method == "POST":
        form = VideoForm(request.POST, request.FILES, instance=videos)
        if form.is_valid():
            form.save()
            messages.info(request, "Updated")
            return redirect("videos")
    context = {"form": form}
    return render(request, "akintunde/video/upload_video.html", context)


def deleteVideo(request, pk):
    try:
        video = Video.objects.get(id=pk)
    except Video.DoesNotExist:
        # Handle the case where the video doesn't exist
        return HttpResponse(request, "video not found")

    if request.method == "POST":
        try:
            video.delete()
            messages.success(request, "Deleted")
            return redirect("videos")  # Redirect to the appropriate URL name
        except Exception as e:
            # Handle any potential errors that occur during deletion
            return HttpResponse(
                request, "error occured during deletion", {"error": str(e)}
            )

    context = {"video": video}
    return render(request, "akintunde/video/delete_video.html", context)




# ================================================================
# exhibition
# ================================================================

def exhibition(request):
    exhibitions = Exhibition.objects.all().order_by("-upload_date")
    context = {"exhibitions": exhibitions}
    return render(request, "akintunde/exhibition.html", context)

