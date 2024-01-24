// app-routing.module.ts

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';

const routes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'moviedetail/:id', component: MoviedetailComponent, outlet: 'movieDetailOutlet' },
  { path: '', redirectTo: '/movies', pathMatch: 'full' },
  { path: '**', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
