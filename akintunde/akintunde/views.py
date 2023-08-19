from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib import messages
from django.contrib.auth import login, logout
from django.core.mail import send_mail
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from .models import About, Gallery, Category, Blog

from .forms import AboutForm, GalleryForm, CategoryForm, BlogForm, ContactForm


# Create your views here.


def loginPage(request):
    if request.user.is_authenticated:
        return redirect("home")

    if request.method == "POST":
        username = request.POST.get("username")
        password = request.POST.get("password")

        try:
            user = User.objects.get(username=username)
        except:
            messages.error(request, "User does not exist")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            login(request, user)
            return redirect("home")
        else:
            messages.error(request, "Username or password is incorrect")

    context = {}
    return render(request, "akintunde/login_register.html", context)


def logoutUser(request):
    logout(request)
    return redirect("login")


def home(request):
    return render(request, "akintunde/home.html")


def about(request):
    about = About.objects.all()
    context = {"about": about}
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
    if request.user != about.host:
        return HttpResponse("you are not allowed here")
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
    if request.user != about.host:
        return HttpResponse("you are not allowed here")
    if request.method == "POST":
        about.delete()
        return redirect("about")
    return render(request, "akintunde/about/delete_form.html", {"obj": about})


# ========================================================================================================
# Gallery
# ========================================================================================================


def gallery(request):
    gallery = Gallery.objects.all()
    categories = Category.objects.all()  # allow to use category in gallery
    context = {"gallery": gallery, "categories": categories}
    return render(request, "akintunde/gallery.html", context)


# def galleryExtended (request):
#     gallery = GalleryExtendedForm()
#     categories = Category.objects.all()  # allow to use category in gallery
#     context = {"gallery": gallery, "categories": categories}
#     return render(request, "akintunde/gallery/gallery_extended.html", context)


@login_required(login_url="login")
def createGallery(request):
    form = GalleryForm()
    categories = Category.objects.all()
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
    blogs = Blog.objects.all()
    context = {"blogs": blogs}
    return render(request, "akintunde/blog.html", context)


def blogExtended(request):
    blogs = Blog.objects.all()
    context = {"blogs": blogs}
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

    return render(request, "akintunde/contact.html", {})
