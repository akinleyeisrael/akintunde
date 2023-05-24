
from django.contrib.auth.models import User
from django.db import models

#home page is static

class About(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    biography = models.TextField(blank=True)

    def __str__(self):
        return self.biography   #return the string field


#foreign
class Category(models.Model):
    title = models.CharField(null=True, max_length=200) #blankc=true means the filed can be blank
    
    def __str__(self):
        return self.title


class Gallery(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    title = models.CharField(max_length=200)  #must specify leng
    image = models.ImageField(upload_to='images', blank=True)
    image_caption = models.CharField(max_length=200, null=True, blank=True)
    image_description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title


class Blog(models.Model):
    host = models.ForeignKey(User, on_delete=models.CASCADE, null=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, null=True)
    description = models.TextField(null=True,blank=True)
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='static/img/blog', blank=True)
    image_caption = models.CharField(max_length=200, null=True, blank=True)
    image_description = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.title


#foreign
# class Image(models.Model):  
#     image_file = models.ImageField(upload_to='static/img')
#     title = models.CharField(max_length=200)
#     caption = models.CharField(max_length=50, null=True, blank=True)
#     description = models.TextField(null=True, blank=True)

#     def __str__(self):
#         return self.title

