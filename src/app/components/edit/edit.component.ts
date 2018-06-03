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
import { MatSnackBar } from '@angular/material';

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
    private router: Router,
    public sb: MatSnackBar) {
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
        this.sb.open("Character successfully updated!", "", { duration: 2000 });
        this.router.navigate(['./']);
      })
        .catch(function (error) {
          this.sb.open("Error updating document: ", error, { duration: 2000 });          
        });
    } else {      
      this.sb.open("Character needs to appear in at least one movie, have a name and an image.", "", { duration: 2000 });
      return false;
    }
  }
}
