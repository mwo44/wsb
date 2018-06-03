import { Component } from '@angular/core';
import { ActivatedRoute, Router, Routes, RouterModule } from '@angular/router';

@Component({
  template: '<section>Section not found. <a routerLink="/">Go back</a>.</section>',
  styles: ['']
})

export class NotFoundComponent {

  constructor() {}

}