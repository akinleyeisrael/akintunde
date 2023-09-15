from django.contrib import admin

from .models import About, Category, Gallery, Blog, Video, Contact, Home

# Register your models here.
admin.site.register(Home)
admin.site.register(About)
admin.site.register(Category)
admin.site.register(Gallery)
admin.site.register(Blog)
admin.site.register(Video)
admin.site.register(Contact)
