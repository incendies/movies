from rest_framework import serializers
from .models import Movie,MovieDetails



class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        #fields = ('movie_id', 'poster_path', 'adult', 'overview', 'release_date','original_title','original_language', 'title', 'backdrop_path', 'popularity', 'vote_count', 'video', 'vote_average')
        fields = '__all__'

class MovieDetailsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MovieDetails
        fields = '__all__'
