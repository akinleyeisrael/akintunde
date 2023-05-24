from django.urls import path
from . import views    #import from current folder


urlpatterns = [
    path('',views.home, name='home'),
    path('about/', views.about, name='about'),
    path('about/create',views.createAbout, name="create-about"),
    path('about/edit/<str:pk>/', views.editAbout, name="edit-about"),
    path('about/delete/<str:pk>/', views.deleteAbout, name="delete-about"),
    path('gallery', views.gallery, name="gallery"),
    path('gallery/create/', views.createGallery, name="create-gallery"),
     path('gallery/edit/<str:pk>/', views.editGallery, name="edit-gallery"),
     path('gallery/delete/<str:pk>/', views.deleteGallery, name="delete-gallery")

] 
