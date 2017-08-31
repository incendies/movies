from django.db import models
from django.contrib.auth.models import User,Permission
from django.contrib.postgres.fields import ArrayField
from django.core.urlresolvers import reverse



class Movie(models.Model):
    movie_id = models.IntegerField(primary_key=True)
    poster_path = models.TextField(max_length=100)
    adult = models.BooleanField()
    overview = models.TextField(max_length=300)
    release_date = models.DateField()
    original_title = models.TextField()
    original_language = models.TextField()
    title = models.TextField()
    backdrop_path = models.TextField()
    popularity = models.TextField()
    vote_count = models.TextField()
    video = models.BooleanField()
    vote_average = models.TextField()
    genre_ids = ArrayField(models.CharField(max_length=50))


class MovieDetails(models.Model):
    movie_id = models.OneToOneField(Movie,on_delete=models.CASCADE,primary_key=True,)
    #movie_id = models.ForeignKey(Movie)
    backdrop_path = models.TextField(max_length=100)
    original_title = models.TextField()
    overview = models.TextField(max_length=300)
    runtime = models.TextField()
    vote_average = models.TextField()
    production_company = models.TextField()
    release_date = models.DateField()
    cast = models.CharField(max_length=5000)



