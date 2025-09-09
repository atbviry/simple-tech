import { Component, computed, effect, inject, Input, model, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './composants/playing-card/playing-card.component';
import { Monster } from './models/monster';
import { SearchBarComponent } from './composants/search-bar/search-bar.component';
import { MonsterType } from './composants/utils/monster.utils'; 
import { MonsterService } from './services/monster/monster.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  //monsters!: Monster[];
    monsters = signal<Monster[]>([]);
  
  monsterSerivce = inject(MonsterService);

  //je vais créer un attribut/un model input search qui va contenir le texte à rechercher.
  search = model('');
  //mainetanant qu'on a notre search, on va créer  signal computed  qui va contenir la liste des montres filtrer
 
  // filterMonsters = computed(() => {
  //   return this.monsters.filter(monster => monster.name.includes(this.search()));
  // }
  // )
  
  // constructor() {
  //   this.monsters = this.monsterSerivce.getAll();
  // }
  
  // addMonster() {
  //   const genericMonster = new Monster();
  //   this.monsterSerivce.add(genericMonster);
  //   this.monsters = this.monsterSerivce.getAll();
  // }

  //version 2
   filterMonsters = computed(() => {
    return this.monsters().filter(monster => monster.name.includes(this.search()));
  }
  )
  
  constructor() {
    this.monsters.set(this.monsterSerivce.getAll());
  }
  
  addMonster() {
    const genericMonster = new Monster();
    this.monsterSerivce.add(genericMonster);
   this.monsters.set(this.monsterSerivce.getAll());
  }
}
