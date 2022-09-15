
from django.http import HttpResponse
from django.shortcuts import redirect
from django.shortcuts import render
from akintunde.models import About, Gallery
from .forms import AboutForm, GalleryForm

# Create your views here.
def home(request):
    return render(request,'akintunde/home.html')


def about(request): 
    about = About.objects.all()
    context = {'about' : about}
    return render(request,'akintunde/about.html', context)

#CRUD : ABOUT
def createAbout(request):
    if request.method == 'POST':
        form = AboutForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('about')
    context = {'form': form}
    return render(request, 'akintunde/about/create_form.html', context)


#EDIT -> ABOUT
def editAbout(request,pk):
    about = About.objects.get(id=pk)
    if request.method == 'POST':
        form = AboutForm(request.POST or None, instance=about)
        if form.is_valid():
            form.save()
            return redirect('about')
    context = {'form':form}
    return render(request, 'akintunde/about/create_form.html', context)

    
def deleteAbout(request,pk):
    about = About.objects.get(id=pk)
    if request.method == 'POST':
        about.delete()
        return redirect('about')
    return render(request, 'akintunde/about/delete_form.html', {'obj':about })


# ========================================================================================================
# Gallery
# ========================================================================================================

def gallery(request):
    gallery = Gallery.objects.all()
    context = {'gallery': gallery}
    return render(request, 'akintunde/gallery.html', context)

def createGallery(request):
    form = GalleryForm(request.POST)
    if request.method == 'POST':
        form = GalleryForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return redirect('gallery')
    context = {'form': form}
    return render(request, 'akintunde/gallery/create_form.html', context)
    