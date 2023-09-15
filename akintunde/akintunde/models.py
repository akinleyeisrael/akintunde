from ckeditor.fields import RichTextField
from ckeditor_uploader.fields import RichTextUploadingField
from django.contrib.auth.models import User
from django.core.validators import EmailValidator
from django.db import models
from embed_video.fields import EmbedVideoField


# home page is static

class Home(models.Model):
    image = models.ImageField(upload_to='images/home', blank=True)
    description = RichTextUploadingField(blank=True, null=True)

    def __str__(self):
        return self.description


class About(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    # biography = models.TextField(blank=True, null=True)
    biography = RichTextUploadingField(blank=True, null=True)

    def __str__(self):
        return self.biography  # return the string field


# foreign
class Category(models.Model):
    title = models.CharField(null=True, max_length=200)  # blankc=true means the filed can be blank

    def __str__(self):
        return self.title


class Gallery(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)  # must specify leng
    image = models.ImageField(upload_to='images/gallery', blank=True)
    image_caption = models.CharField(max_length=200, null=True, blank=True)
    image_description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title


class Blog(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    description = RichTextUploadingField(null=True, blank=True)
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='images/blog', blank=True)
    image_caption = models.CharField(max_length=200, null=True, blank=True)
    image_description = models.TextField(null=True, blank=True)  # excluded in forms
    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title


class Contact(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField(null=False, blank=False,
                              validators=[EmailValidator(message='Please enter a valid email address.')])
    subject = models.CharField(max_length=500, null=False, blank=False)
    message = models.TextField(null=False, blank=False)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.subject


class Video(models.Model):
    videourl = EmbedVideoField(blank=False, null=True, default="")
    title = models.CharField(max_length=100)
    description = RichTextField(null=True, blank=True)
    video_file = models.FileField(upload_to='videos/')
    upload_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

# foreign
# class Image(models.Model):  
#     image_file = models.ImageField(upload_to='static/img')
#     title = models.CharField(max_length=200)
#     caption = models.CharField(max_length=50, null=True, blank=True)
#     description = models.TextField(null=True, blank=True)

#     def __str__(self):
#         return self.title
