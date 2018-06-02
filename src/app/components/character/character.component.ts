import {
  Component,
  Input
} from '@angular/core';
import { MainService } from '../main/main.service';
import { Character } from './character.interface';

@Component({
  selector: 'character',
  templateUrl: './character.component.html',
  styleUrls: [ './character.component.scss' ]
})

export class CharacterComponent {
  @Input()
  mainService: MainService;

  @Input()
  character: Character;

  @Input()
  folded = true;

  selectedCharacter: number = null;

  constructor(ms: MainService) {
      this.mainService = ms;
  }

  delete(id: string): void {
    this.mainService.delete(id);
  }

}