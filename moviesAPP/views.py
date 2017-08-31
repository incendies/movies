from .serializers import MovieSerializer, MovieDetailsSerializer
from rest_framework import viewsets
from .models import Movie,MovieDetails

class MovieViewSet(viewsets.ModelViewSet):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer

class MovieDetailsViewSet(viewsets.ModelViewSet):
    queryset = MovieDetails.objects.all()
    serializer_class = MovieDetailsSerializer