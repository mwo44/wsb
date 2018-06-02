import {
  Component,
  EventEmitter,
  OnChanges,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';;
import { MainService } from '../main/main.service';
import { Character } from '../character/character.interface';

@Component({
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit, OnDestroy
  {
  mainService: MainService;
  person: Character;
  tempPerson: Character;
  movies: any;
  id: string;

  constructor(private ms: MainService,
    private route: ActivatedRoute,
    private router: Router) {
    this.mainService = ms;
    this.route.params.subscribe(
      params => (this.id = params['id'])
    );

  }

  ngOnInit() {
    this.movies = this.mainService.moviesSnapshot;

    this.mainService.read(this.id).then(
      (doc) => {
        if (doc.exists) {
          this.person = doc.data();
          this.tempPerson = this.person;
          this.movies.forEach((movie) => {
            this.person.films.forEach((film) => {
              if (movie.title == film) {
                movie.checked = true;
              }
            });
          });
        }
      });
  }

  ngOnDestroy() {
    this.movies = null;
    this.person = null;
    this.tempPerson = null;
  }

  updateFilms(event) {
    // For material checkboxes event.target may be event.source.
    (event.target.checked) ?
      this.tempPerson.films.push(event.target.value) :
      this.tempPerson.films.splice(this.tempPerson.films.indexOf(event.target.value), 1);
  }

  edit(form) {
    if (this.tempPerson.films.length > 0 &&
        form.name.length > 0 && 
        form.image.length > 0) {
      this.tempPerson.name = form.name;
      this.tempPerson.image = form.image;
      this.mainService.update(this.tempPerson).then((success) => {
        console.log("Document successfully updated!");
        this.router.navigate(['./']);
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