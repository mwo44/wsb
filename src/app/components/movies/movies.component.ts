import { Component } from '@angular/core';
import { MainService } from '../main/main.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  mainService: MainService;
  movies: any;

  constructor(ms: MainService) {
    this.mainService = ms;
    this.movies = this.mainService.moviesSnapshot;
  }

}