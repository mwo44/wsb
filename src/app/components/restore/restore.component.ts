import { Component } from '@angular/core';
import { MainService } from '../main/main.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'restore',
  template: '<button mat-raised-button color="primary" (click)="restore()"><i class="material-icons">restore_from_trash</i>restore characters</button>'
})
export class RestoreComponent {
  mainService: MainService;
  people: any = [
      {
        "_id": "1,527,848,922,403",
        "name": "Kylo Ren",
        "image": "https://lumiere-a.akamaihd.net/v1/images/kylo-ren-db-main_e2e6f666.jpg?width=480&height=200",
        "films": [
          "The Force Awakens",
          "The Last Jedi"
        ]
      },
      {
        "_id": "1,527,849,094,633",
        "name": "Finn",
        "image": "https://lumiere-a.akamaihd.net/v1/images/finn-bio-1_92f4d3db.jpg?width=480&height=200",
        "films": [
          "The Force Awakens",
          "The Last Jedi"
        ]
      },
      {
        "_id": "1,527,849,122,970",
        "name": "Rey",
        "image": "https://lumiere-a.akamaihd.net/v1/images/rey-main_73d146de.jpg?width=480&height=200",
        "films": [
          "The Force Awakens",
          "The Last Jedi"
        ]
      },
      {
        "_id": "1,527,851,122,970",
        "name": "Jar Jar Binks",
        "image": "https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpg?width=480&height=200",
        "films": [
          "Attack of the Clones",
          "The Phantom Menace"
        ]
      },
      {
        "_id": "1,527,852,134,970",
        "name": "Darth Vader",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpg?width=480&height=200",
        "films": [
          "The Empire Strikes Back",
          "A New Hope",
          "Revenge of the Sith",
          "Return of the Jedi"
        ]
      },
      {
        "_id": "1,527,853,134,970",
        "name": "R2-D2",
        "image": "https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpg?width=480&height=200",
        "films": [
          "The Force Awakens",
          "A New Hope",
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Phantom Menace",
          "Attack of the Clones",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "1,527,854,134,970",
        "name": "Yoda",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpg?width=480&height=200",
        "films": [
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Phantom Menace",
          "Attack of the Clones",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "1,527,855,134,970",
        "name": "Han Solo",
        "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-nfid8t_2aab8189.jpg?width=480&height=200",
        "films": [
          "The Force Awakens",
          "A New Hope",
          "Return of the Jedi",
          "The Empire Strikes Back",
          "Solo: A Star Wars Story"
        ]
      },
      {
        "_id": "1,527,856,134,970",
        "name": "C-3PO",
        "image": "https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpg?width=480&height=200",
        "films": [
          "A New Hope",
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Phantom Menace",
          "Attack of the Clones",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "1,527,857,134,970",
        "name": "Luke Skywalker",
        "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1ymefwb_483d5487.jpg?width=480&height=200",
        "films": [
          "The Force Awakens",
          "A New Hope",
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "1,527,858,134,970",
        "name": "Leia Organa",
        "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1ly2wd_eb4b4064.jpg?width=480&height=200",
        "films": [
          "The Force Awakens",
          "A New Hope",
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "1,527,859,134,970",
        "name": "Chewbacca",
        "image": "https://lumiere-a.akamaihd.net/v1/images/solo-chewbacca-main_80768fa8.jpg?width=480&height=200",
        "films": [
          "Revenge of the Sith",
          "The Empire Strikes Back",
          "A New Hope",
          "Return of the Jedi",
          "The Force Awakens",
          "The Last Jedi",
          "Solo: A Star Wars Story"
        ]
      },
      {
        "_id": "1,527,861,134,970",
        "name": "Obi-Wan Kenobi",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpg?width=480&height=200",
        "films": [
          "Attack of the Clones",
          "Revenge of the Sith",
          "The Empire Strikes Back",
          "The Phantom Menace",
          "A New Hope",
          "Return of the Jedi"
        ]
      },
      {
        "_id": "1,527,864,134,970",
        "name": "Anakin Skywalker",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Anakin-Skywalker_d3330724.jpg?width=480&height=200",
        "films": [
          "Attack of the Clones",
          "Revenge of the Sith",
          "The Phantom Menace",
          "Return of the Jedi"
        ]
      },
      {
        "_id": "1,527,865,134,970",
        "name": "Palpatine",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Emperor-Palpatine_7ac4a10e.jpg?width=480&height=200",
        "films": [
          "Attack of the Clones",
          "Revenge of the Sith",
          "The Empire Strikes Back",
          "The Phantom Menace",
          "Return of the Jedi"
        ]
      }, {
        "_id": "1,527,866,134,970",
        "name": "Padmé",
        "image": "https://lumiere-a.akamaihd.net/v1/images/image_de6fe408.jpg?width=480&height=200",
        "films": [
          "Revenge of the Sith",
          "The Phantom Menace",
          "Attack of the Clones"
        ]
      }
    ];
  constructor(ms: MainService,
              public sb: MatSnackBar) {
    this.mainService = ms;
  }
  
  restore(): void {    
    var timer = 1000;
    this.people.forEach((character) => {
      this.mainService.create(character).then(() => {
        setTimeout(() => {
          this.sb.open(`${character.name} restored.`, "", {
            duration: timer
          });
        }, timer);
      });
    });
  }

}