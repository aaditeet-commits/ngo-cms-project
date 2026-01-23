from django.urls import path
from django.views.generic import TemplateView

urlpatterns = [
    path("api/", include("accounts.urls")),   # your APIs
    path("", TemplateView.as_view(
        template_name="index.html"
    )),
]
