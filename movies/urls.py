
from django.conf.urls import url,include
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns



urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^movie/', include('moviesAPP.urls')),
  ]
