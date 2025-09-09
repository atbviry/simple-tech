import { Component, computed, inject, model, signal } from '@angular/core';
import { Monster } from '../../models/monster';
import { MonsterService } from '../../services/monster/monster.service';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from '../../composants/playing-card/playing-card.component';
import { SearchBarComponent } from '../../composants/search-bar/search-bar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monsters-list',
  standalone: true,
  imports: [CommonModule, PlayingCardComponent, SearchBarComponent],
  templateUrl: './monsters-list.component.html',
  styleUrl: './monsters-list.component.css'
})
export class MonstersListComponent {
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
