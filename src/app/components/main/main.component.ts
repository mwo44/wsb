import {  Component,
          Input } from '@angular/core';
import { Location } from '@angular/common';
import {  ActivatedRoute,
          Router,
          Routes,
          RouterModule } from '@angular/router';
import { MoviesComponent } from '../movies/movies.component';
import { Character } from '../character/character.interface';
import { MainService } from './main.service';

@Component({
  selector: 'main',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})

export class MainComponent {
  mainService: MainService;
  selectedCharacter: number = null;
  people: any;

  constructor(ms: MainService,
    private route: ActivatedRoute,
    private location: Location) {

    this.route.params.subscribe(
      params => (this.selectedCharacter = +params['id'])
    );    
  }

  selectCharacter(index: number): void {
    if (index == this.selectedCharacter) {
      this.selectedCharacter = null;
      this.location.replaceState('');
    } else {
      this.selectedCharacter = index;
    }
  }
}