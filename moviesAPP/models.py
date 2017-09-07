from django.db import models
from django.contrib.auth.models import User,Permission
from django.contrib.postgres.fields import ArrayField
from django.core.urlresolvers import reverse



class Movie(models.Model):
    movie_id = models.IntegerField(primary_key=True)
    poster_path = models.TextField(max_length=100,null=True,blank=True)
    adult = models.NullBooleanField(blank=True, null=True)
    overview = models.TextField(max_length=300,null=True,blank=True)
    release_date = models.DateField(null=True,blank=True)
    original_title = models.TextField(null=True,blank=True)
    original_language = models.TextField(null=True,blank=True)
    title = models.TextField(null=True,blank=True)
    backdrop_path = models.TextField(null=True,blank=True)
    popularity = models.TextField(null=True,blank=True)
    vote_count = models.TextField(null=True,blank=True)
    video = models.NullBooleanField(blank=True, null=True)
    vote_average = models.TextField(null=True,blank=True)
    genre_ids = ArrayField(models.CharField(max_length=50),null=True,blank=True)



class MovieDetails(models.Model):
    movie_id = models.ForeignKey(Movie, on_delete=models.CASCADE)
    backdrop_path = models.TextField(max_length=100,null=True,blank=True)
    original_title = models.TextField(null=True,blank=True)
    overview = models.TextField(max_length=300,null=True,blank=True)
    runtime = models.TextField(null=True,blank=True)
    vote_average = models.TextField(null=True,blank=True)
    production_company = models.TextField(null=True,blank=True)
    release_date = models.DateField(null=True,blank=True)
    cast = models.CharField(max_length=5000,null=True,blank=True)



