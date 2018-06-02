import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { EditComponent } from './components/edit/edit.component';
import { AddComponent } from './components/add/add.component';
import { NotFoundComponent } from './components/notfound/notfound.component';
 

export const RoutePaths: Routes = [
    {
      path: '',
      component: MainComponent
    },
    {
      path: ':id',
      component: MainComponent
    },
    {
      path: 'edit/:id',
      component: EditComponent
    },
    {
      path: '**',
      component: NotFoundComponent
    },
];