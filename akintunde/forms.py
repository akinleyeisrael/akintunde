from pyexpat import model
from django import forms
from .models import About, Gallery

class AboutForm(forms.ModelForm):

    class Meta:
        model = About
        fields = '__all__'
        exclude = ['host']


class GalleryForm(forms.ModelForm):
    class Meta:
        model = Gallery
        fields = '__all__'
        exclude = ['host']
        