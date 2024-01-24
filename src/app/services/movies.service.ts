// movies.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKey = '5c06fed2cdf4dfcdab132d9e67c1c2e7';
  private discoverUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`;

  private selectedMovieSubject = new Subject<any>();

  constructor(private http: HttpClient) { }

  getMovies(): Observable<any> {
    return this.http.get(this.discoverUrl);
  }

  setSelectedMovie(movie: any): void {
    this.selectedMovieSubject.next(movie);
  }

  getSelectedMovie(): Observable<any> {
    return this.selectedMovieSubject.asObservable();
  }
}
