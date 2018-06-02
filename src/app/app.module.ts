import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFirestoreModule, AngularFirestore } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';

import { Environment } from './environment';
import { RoutePaths } from './routes';

import { MainService } from './components/main/main.service';

import { AddComponent } from './components/add/add.component';
import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { EditComponent } from './components/edit/edit.component';
import { MainComponent } from './components/main/main.component';
import { MoviesComponent } from './components/movies/movies.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
import { RestoreComponent } from './components/restore/restore.component';
import { CharactersComponent } from './components/characters/characters.component';

// Material imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,
         MatCheckboxModule } from '@angular/material';

const config = Environment;

const routes = RoutePaths;

@NgModule({
  imports:      [
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule
  ],
  declarations: [
    AddComponent,
    AppComponent,
    CharacterComponent,
    EditComponent,
    MainComponent,
    MoviesComponent,
    NotFoundComponent,
    RestoreComponent,
    CharactersComponent,
  ],
  bootstrap: [AppComponent],
  providers: [MainService],
})

export class AppModule {
  constructor(private afs: AngularFirestore) {
    afs.app.firestore().settings({timestampsInSnapshots: true});
  }
}
