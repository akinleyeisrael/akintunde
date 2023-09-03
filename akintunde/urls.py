from django.urls import path
from . import views  # import from current folder


urlpatterns = [
    path("", views.home, name="home"),
    path("login", views.loginPage, name="login"),
    path("logout/", views.logoutUser, name="logout"),
    path("about/", views.about, name="about"),
    path("about/create", views.createAbout, name="create-about"),
    path("about/edit/<str:pk>/", views.editAbout, name="edit-about"),
    path("about/delete/<str:pk>/", views.deleteAbout, name="delete-about"),
    path("gallery", views.gallery, name="gallery"),
    path("gallery/details/<str:pk>/", views.galleryExtended, name="gallery-extended"),
    path("gallery/create/", views.createGallery, name="create-gallery"),
    path("gallery/edit/<str:pk>/", views.editGallery, name="edit-gallery"),
    path("gallery/delete/<str:pk>/", views.deleteGallery, name="delete-gallery"),
    path("gallery/category/create/", views.createCategory, name="create-category"),
    path("gallery/category/edit/<str:pk>/", views.editCategory, name="edit-category"),
    path(
        "gallery/category/delete/<str:pk>/",
        views.deleteCategory,
        name="delete-category",
    ),

    path("blog/", views.blog, name="blog"),
    
    path("blog/create/", views.createBlog, name="create-blog"),
    path("blog/edit/<str:pk>/", views.editBlog, name="edit-blog"),
    path("blog/delete/<str:pk>/", views.deleteBlog, name="delete-blog"),
    path("blog/details/<str:pk>/", views.blogExtended, name="blog-extended"),
    path("contact/", views.contact, name="contact"),
    path("videos/", views.videos, name="videos"),
    path("videos/uploadVideo/", views.upload_video, name="video-upload"),
    path("videos/edit/<str:pk>/", views.edit_video, name="edit-video"),
    path("videos/delete/<str:pk>/", views.deleteVideo, name="delete-video"),
    path("exhibition/", views.exhibition, name="exhibition"),
]

