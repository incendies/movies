from django.views.generic.base import TemplateView

from .serializers import MovieSerializer, MovieDetailsSerializer
from rest_framework import viewsets
from .models import Movie,MovieDetails

from django.shortcuts import render



class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetailsViewSet(viewsets.ModelViewSet):
    queryset = MovieDetails.objects.all()
    serializer_class = MovieDetailsSerializer



class HomeView(TemplateView):
    template_name = 'index.html'
