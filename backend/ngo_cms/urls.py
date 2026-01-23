from django.views.generic import TemplateView

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('your_auth_urls')),

    # Catch all other paths and serve React
    path('', TemplateView.as_view(template_name='index.html')),
]
