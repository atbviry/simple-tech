import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './composants/playing-card/playing-card.component';
import { Monster } from './models/monster';
import { SearchBarComponent } from './composants/search-bar/search-bar.component';
import { MonsterType } from './composants/utils/monster.utils';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    PlayingCardComponent,
    SearchBarComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  monsters!: Monster[];
  count: number = 0;//il est à zéro à defaut de clique sur le bouton de recherhce
  search: string = '';

  selectedMonsterIndex = 0; //la position de l'élément qu'on doit afficher 

  constructor() {
    this.monsters = [];

   const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 45;
    monster1.figureCaption= "N° 25 Pik";
    monster1.attackDescription = "This is a long description of a monster capacity.";

    const monster2 = new Monster();
    monster2.name = "CAR";
    monster2.image = "assets/img/pokemon.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
     monster2.figureCaption= "N° 003 Water";
    monster2.attackDescription = "This is a long description of a monster capacity.";
    this.monsters.push(monster1, monster2);

  }
  
  /* ngOnInit(): void {
    this.monster1 = new Monster();
    this.monster1.name = "Pik"; 

    this.monster1.hp = 45;
    this.monster1.figureCaption = "N° 25 Monster";
    this.monster1.attackDescription = "This is a long description of a monster capacity.";

    console.log('Notification du composant search-bar : ' + this.search);
  } */

  // increaseCount() {
  //   this.count++;
  // }
  // ///https://chatgpt.com/c/687cd30d-fe50-8004-b72e-6a30bf015bfe
  // updateChange(value: string) {
  //   debugger;
  //   this.search = value;
  //   console.log('Notification du composant search-bar : ' + this.search);
  // }


  toggleMonster() {
    //debugger;
    this.selectedMonsterIndex = (this.selectedMonsterIndex + 1)% this.monsters.length;
  }
}
