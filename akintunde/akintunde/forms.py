from django import forms
from .models import About, Gallery, Category, Blog, Contact,Video


class AboutForm(forms.ModelForm):
    class Meta:
        model = About
        fields = "__all__"
        widgets = {
            'biography': forms.Textarea(attrs={'class':'form-control','placeholder':'Enter your biography'})
            
        }
        exclude = ["host"]


class GalleryForm(forms.ModelForm):
    class Meta:
        model = Gallery
        fields = "__all__"
        widgets = {
            'title': forms.TextInput(attrs={'class':'form-control','placeholder':'Enter your title'}),
            'image': forms.FileInput(attrs={'class':'form-control'}),
            'image_caption': forms.TextInput(attrs={'class':'form-control'}),
            'category': forms.Select(attrs={'class':'form-control'}),
            'image_description': forms.Textarea(attrs={'class':'form-control'}),
        }
        exclude = ["host"]
        
class GalleryExtendedForm(forms.ModelForm):
    class Meta:
        model = Gallery
        fields = ["title", "image_description", "image_caption"]
    


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ["title"]  # only title is needed
        widgets = {
            'title': forms.TextInput(attrs={'class':'form-control', 'placeholder' : 'Title'}),
        }


class BlogForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = "__all__"
        widgets = {
            'title': forms.TextInput(attrs={'class':'form-control', 'placeholder' : 'Title'}), 
            'image': forms.FileInput(attrs={'class':'form-control', 'placeholder' : 'Image'}),
            'description': forms.Textarea(attrs={'class':'form-control', 'placeholder' : ' Description'}),
            'image_caption': forms.TextInput(attrs={'class':'form-control', 'placeholder' : 'Image Caption'}),
            'category': forms.Select(attrs={'class':'form-control form-select', 'placeholder' : 'Category' })
            
        }
        exclude = ["host", "image_description"]  # exclude image_description

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = "__all__"

    


class VideoForm(forms.ModelForm):
    class Meta:
        model = Video
        fields = "__all__"
        exclude = ["description"]
        widgets = {
            'title': forms.TextInput(attrs={'class':'form-control', 'placeholder' : 'Title- tell about your video'}),
            'description': forms.Textarea(attrs={'class':'form-control', 'placeholder' : 'Description'}),
            'video_file': forms.FileInput(attrs={'class':'form-control', 'placeholder' : 'Video File'})
        }
       