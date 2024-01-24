// moviedetail.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  movie: any;

  constructor(private route: ActivatedRoute, private service: MoviesService) { }

  ngOnInit(): void {
    this.service.getSelectedMovie().subscribe((selectedMovie: any) => {
      this.movie = selectedMovie;
    });
  }
}
