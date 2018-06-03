import { Injectable } from '@angular/core'
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Character } from '../character/character.interface';
import { MatSnackBar } from '@angular/material';
// Firebase storage service for CRUD 
@Injectable()
export class MainService {
  peopleFolder: string = 'people';
  people: Observable<any>;
  peopleCollection: AngularFirestoreCollection<any>;
  
  moviesFolder: string = 'movies';
  moviesCollection: AngularFirestoreCollection<any>;
  moviesSnapshot: any = [];
  
  character: Character;
  db: AngularFirestore;  

  constructor(db: AngularFirestore,
              public sb: MatSnackBar){
    this.db = db;
    this.peopleCollection = db.collection(this.peopleFolder);
    this.people = this.peopleCollection.valueChanges();
    
    this.moviesCollection = db.collection(this.moviesFolder);
    this.moviesCollection.ref.orderBy("release_year").get().then(
      querySnapshot => {
        querySnapshot.forEach(doc => {
            this.moviesSnapshot.push(doc.data());
        });
    });
  
  }

  create(person: Character) {
    return this.peopleCollection.doc(person._id).set(person);
  }

  read(id: string) {
    return this.peopleCollection.doc(id).ref.get();
  }

  update(person: Character): void {
    return this.peopleCollection.doc(person._id).ref.update(person);
  }

  delete(id: string): void {
    this.peopleCollection.doc(id).delete().then(() => {
        this.sb.open("Character successfully deleted!", "", {
          duration: 2000
        });
    }).catch((error) => {
        this.sb.open("Error removing document: ", error, {
          duration: 2000
        });
    });
  }
}