import { Component, Input } from '@angular/core';
import { Character } from '../character/character.interface';
import { MainService } from '../main/main.service';

@Component({
  selector: 'characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent {
  @Input()
  selectedCharacter;

  mainService: MainService;
  people: any;

  constructor(ms: MainService) {
    this.mainService = ms;
    this.people = this.mainService.people;
  }

}