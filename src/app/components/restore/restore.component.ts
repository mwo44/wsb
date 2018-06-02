import { Component } from '@angular/core';
import { MainService } from '../main/main.service';

@Component({
  selector: 'restore',
  template: '<button (click)="restore()">restore characters</button>'
})
export class RestoreComponent {
  mainService: MainService;
  people: any = [
      {
        "_id": "QaEbqwNqron9J4WI6Sxw",
        "name": "Jar Jar Binks",
        "image": "https://lumiere-a.akamaihd.net/v1/images/databank_jarjarbinks_01_169_c70767ab.jpg",
        "films": [
          "Attack of the Clones",
          "The Phantom Menace"
        ]
      },
      {
        "_id": "T3Q88GB0mY5A1Wh7TZW8",
        "name": "Darth Vader",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Darth-Vader_6bda9114.jpg",
        "films": [
          "The Empire Strikes Back",
          "A New Hope",
          "Revenge of the Sith",
          "Return of the Jedi"
        ]
      },
      {
        "_id": "Y7kCuh7OknI7n7LEKmCB",
        "name": "R2-D2",
        "image": "https://lumiere-a.akamaihd.net/v1/images/r2-d2_41dacaa9_68566da1.jpg",
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
        "_id": "ahuBSOromVb5UzlemSIJ",
        "name": "Yoda",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Yoda-Retina_2a7ecc26.jpg",
        "films": [
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Phantom Menace",
          "Attack of the Clones",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "evkExlwbexl4CGvfRM5S",
        "name": "Han Solo",
        "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-nfid8t_2aab8189.jpg",
        "films": [
          "The Force Awakens",
          "A New Hope",
          "Return of the Jedi",
          "The Empire Strikes Back",
          "Solo: A Star Wars Story"
        ]
      },
      {
        "_id": "iZG6JDsvM9luTgKPIyEs",
        "name": "C-3PO",
        "image": "https://lumiere-a.akamaihd.net/v1/images/C-3PO-See-Threepio_68fe125c.jpg",
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
        "_id": "mSLdnDWtFzRNERsgz6BQ",
        "name": "Luke Skywalker",
        "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1ymefwb_483d5487.jpg",
        "films": [
          "The Force Awakens",
          "A New Hope",
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "uGX18R7EtWEtTCSKReTD",
        "name": "Leia Organa",
        "image": "https://lumiere-a.akamaihd.net/v1/images/open-uri20150608-27674-1ly2wd_eb4b4064.jpg",
        "films": [
          "The Force Awakens",
          "A New Hope",
          "Return of the Jedi",
          "Revenge of the Sith",
          "The Empire Strikes Back"
        ]
      },
      {
        "_id": "P1Acgtg5DqH4dFfEIMOI",
        "name": "Chewbacca",
        "image": "https://lumiere-a.akamaihd.net/v1/images/solo-chewbacca-main_80768fa8.jpg",
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
        "_id": "cHKwJt0Pe0AqsEfWXTLh",
        "name": "Obi-Wan Kenobi",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Obi-Wan-Kenobi_6d775533.jpg",
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
        "_id": "OlyNZD8k0Hcr2sCB4FGc",
        "name": "Anakin Skywalker",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Anakin-Skywalker_d3330724.jpg",
        "films": [
          "Attack of the Clones",
          "Revenge of the Sith",
          "The Phantom Menace",
          "Return of the Jedi"
        ]
      },
      {
        "_id": "2bJai0PkWn1ceMTeq3Cx",
        "name": "Palpatine",
        "image": "https://lumiere-a.akamaihd.net/v1/images/Emperor-Palpatine_7ac4a10e.jpg",
        "films": [
          "Attack of the Clones",
          "Revenge of the Sith",
          "The Empire Strikes Back",
          "The Phantom Menace",
          "Return of the Jedi"
        ]
      }, {
        "_id": "4cy7Tf4HJjY6QKjDxJuM",
        "name": "Padmé",
        "image": "https://lumiere-a.akamaihd.net/v1/images/image_de6fe408.jpg",
        "films": [
          "Revenge of the Sith",
          "The Phantom Menace",
          "Attack of the Clones"
        ]
      }
    ];
  constructor(ms: MainService) {
    this.mainService = ms;
  }

  restore(): void {    
    this.people.forEach((character) => {
      this.mainService.create(character).then(() => {
        console.log(`Character ${character.name} restored.`)
      });
    });
  }

}