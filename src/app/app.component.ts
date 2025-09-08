import { Component, computed, effect, Input, model, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './composants/playing-card/playing-card.component';
import { Monster } from './models/monster';
import { SearchBarComponent } from './composants/search-bar/search-bar.component';
import { MonsterType } from './composants/utils/monster.utils'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent, SearchBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

  monsters!: Monster[];
  //je vais créer un attribut/un model input search qui va contenir le texte à rechercher.
  search = model('');
  //mainetanant qu'on a notre search, on va créer  signal computed  qui va contenir la liste des montres filtrer
  filterMonsters = computed(() => {
    return this.monsters.filter(monster => monster.name.includes(this.search()));
  }
  )
  
  constructor() {

    this.monsters = [];

   const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 45;
    monster1.figureCaption= "N° 25 Pik";
    monster1.attackDescription = "This is a long description of a monster capacity.";

    const monster2 = new Monster();
    monster2.name = "Pokemon";
    monster2.image = "assets/img/pokemon.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
     monster2.figureCaption= "N° 001 Water";
    monster2.attackDescription = "This is a long description of a monster capacity.";

    const monster3 = new Monster();
    monster3.name = "Pikachou";
    monster3.image = "assets/img/pikachou.png";
    monster3.type = MonsterType.WATER;
    monster3.hp = 45;
     monster3.figureCaption= "N° 002 Water";
    monster3.attackDescription = "This is a long description of a monster capacity.";

    const monster4 = new Monster();
    monster4.name = "Plant";
    monster4.image = "assets/img/plant.png";
    monster4.type = MonsterType.PLANT;
    monster4.hp = 45;
     monster4.figureCaption= "N° 002 Water";
    monster4.attackDescription = "This is a long description of a monster capacity.";

    this.monsters.push(monster1, monster2, monster3, monster4);

  }
  
}
