// movies.component.ts

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../services/movies.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  moviedetails: boolean = true;
  movies: any = [];

  searchQuery: string = '';
  searchResults: any = [];

  constructor(private router: Router, private service: MoviesService, private http: HttpClient) {}

  ngOnInit(): void {
    this.service.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

  showMovieDetails(movie: any): void {
    this.moviedetails = false;
    this.service.setSelectedMovie(movie);
    this.router.navigate(['moviedetail', movie.id]);
  }

  searchMovies() {
    const apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7';
    const searchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${this.searchQuery}&page=1&include_adult=false`;

    this.http.get(searchUrl).subscribe(
      (data: any) => {
        this.searchResults = data.results;
        // Assuming you want to display search results, you can assign them to this.movies
        this.movies = this.searchResults;
      });
  }
}
