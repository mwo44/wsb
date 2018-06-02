import {
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit,
  ElementRef,
  ViewChild
} from '@angular/core';
import { v4 as uuid } from 'uuid';
import { MainService } from '../main/main.service';
import { Character } from '../character/character.interface';

@Component({
  selector: '<add></add>',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit, OnDestroy {
  mainService: MainService;
  person: any; //Character;
  movies: any;

  @ViewChild('addForm', { read: ElementRef }) addForm:ElementRef;

  constructor(ms: MainService) {
      this.mainService = ms;
      this.person = {
        //_id: uuid(),
        _id: Date.now().toLocaleString('en-US'),
        name: '',
        image: '',
        films: []
      }
  }

  ngOnInit(): void {
    this.movies = this.mainService.moviesSnapshot;
    this.killFilms();
  }

  ngOnDestroy(): void {
    this.movies = null;
    this.person = null;
    this.killFilms();
  }

  ngAfterViewInit(): void {
    this.killFilms();
  }

  killFilms(): void {
    this.addForm.nativeElement.reset();
  }
  
  updateFilms(event) {
    // For material checkboxes event.target may be event.source.
    (event.target.checked) ?
      this.person.films.push(event.target.value) :
      this.person.films.splice(this.person.films.indexOf(event.target.value), 1);
  }
  add(form) {
    var character: Character = this.person;
    console.log(character);
    if (this.person.films.length > 0 &&
        form.name.length > 0 && 
        form.image.length > 0) {
      this.person.name = form.name;
      this.person.image = form.image;
      this.mainService.create(character).then((success) => {
        console.log("Document successfully updated!");
        this.killFilms();
      })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    } else {
      console.log("Character needs to appear in at least one movie, have a name and an image.");
      return false;
    }
  }
}