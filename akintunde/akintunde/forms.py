from django import forms
from .models import About, Gallery, Category, Blog, Contact


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
        exclude = ["host"]
        
class GalleryExtendedForm(forms.ModelForm):
    class Meta:
        model = Gallery
        fields = ["title", "image_description", "image_caption"]
    


class CategoryForm(forms.ModelForm):
    class Meta:
        model = Category
        fields = ["title"]  # only title is needed


class BlogForm(forms.ModelForm):
    class Meta:
        model = Blog
        fields = "__all__"
        exclude = ["host", "image_description"]  # exclude image_description

class ContactForm(forms.ModelForm):
    class Meta:
        model = Contact
        fields = "__all__"
    
