import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { PopularityPipe } from './pipes/popularity.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MoviedetailComponent,
    PopularityPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
