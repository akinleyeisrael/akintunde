from django.contrib import admin
from .models import About,Category,Gallery,Blog

# Register your models here.
admin.site.register(About)
admin.site.register(Category)
admin.site.register(Gallery)
admin.site.register(Blog)