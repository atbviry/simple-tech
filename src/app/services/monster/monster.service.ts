import { Injectable } from '@angular/core';
import { Monster } from '../../models/monster';
import { MonsterType } from '../../composants/utils/monster.utils';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  monsters: Monster[] = [];
  currentIndex = 1;

  constructor() {
    //   this.monsters = [];

    //  const monster1 = new Monster();
    //   monster1.name = "Pik";
    //   monster1.hp = 45;
    //   monster1.figureCaption= "N° 25 Pik";
    //   monster1.attackDescription = "This is a long description of a monster capacity.";

    //   const monster2 = new Monster();
    //   monster2.name = "Pokemon";
    //   monster2.image = "assets/img/pokemon.png";
    //   monster2.type = MonsterType.WATER;
    //   monster2.hp = 60;
    //    monster2.figureCaption= "N° 001 Water";
    //   monster2.attackDescription = "This is a long description of a monster capacity.";

    //   const monster3 = new Monster();
    //   monster3.name = "Pikachou";
    //   monster3.image = "assets/img/pikachou.png";
    //   monster3.type = MonsterType.WATER;
    //   monster3.hp = 45;
    //    monster3.figureCaption= "N° 002 Water";
    //   monster3.attackDescription = "This is a long description of a monster capacity.";

    //   const monster4 = new Monster();
    //   monster4.name = "Plant";
    //   monster4.image = "assets/img/plant.png";
    //   monster4.type = MonsterType.PLANT;
    //   monster4.hp = 45;
    //    monster4.figureCaption= "N° 002 Water";
    //   monster4.attackDescription = "This is a long description of a monster capacity.";

    //   this.monsters.push(monster1, monster2, monster3, monster4);
    this.load();

  }

  private save() {
    localStorage.setItem('monsters', JSON.stringify(this.monsters));
  }

  private load() {
    const monsterData = localStorage.getItem('monsters');
    if (monsterData) {
      this.monsters = JSON.parse(monsterData).map((monsterJSON: any) => Object.assign(new Monster(), monsterJSON));
      this.currentIndex = Math.max(...this.monsters.map(monster => monster.id)); // ... car on veut  les valeurs en question
    } else {
      this.init();
      this.save();
    }
  }
  private init() {
    this.monsters = [];

    const monster1 = new Monster();
    monster1.name = "Pik";
    monster1.hp = 45;
    monster1.figureCaption = "N° 25 Pik";
    monster1.attackDescription = "This is a long description of a monster capacity.";

    const monster2 = new Monster();
    monster2.name = "Pokemon";
    monster2.image = "assets/img/pokemon.png";
    monster2.type = MonsterType.WATER;
    monster2.hp = 60;
    monster2.figureCaption = "N° 001 Water";
    monster2.attackDescription = "This is a long description of a monster capacity.";

    const monster3 = new Monster();
    monster3.name = "Pikachou";
    monster3.image = "assets/img/pikachou.png";
    monster3.type = MonsterType.WATER;
    monster3.hp = 45;
    monster3.figureCaption = "N° 002 Water";
    monster3.attackDescription = "This is a long description of a monster capacity.";

    const monster4 = new Monster();
    monster4.name = "Plant";
    monster4.image = "assets/img/plant.png";
    monster4.type = MonsterType.PLANT;
    monster4.hp = 45;
    monster4.figureCaption = "N° 002 Water";
    monster4.attackDescription = "This is a long description of a monster capacity.";

    this.monsters.push(monster1, monster2, monster3, monster4);
    this.save();

  }

  getAll(): Monster[] {
    return this.monsters.map(monter => monter.copy());
  }

  get(id: number): Monster | undefined {
    const monster = this.monsters.find(monster => monster.id === id);
    return monster ? monster.copy() : undefined;
  }

  add(monster: Monster): Monster {
    const monsterCopy = monster.copy();
    monsterCopy.id = this.currentIndex;
    this.monsters.push(monsterCopy);
    this.currentIndex++;
    this.save();
    return monsterCopy;
  }

  update(monster: Monster) {
    const monsterCopy = monster.copy();
    const monsterIndex = this.monsters.findIndex(orignalMonster => orignalMonster.id === monster.id);
    if (monsterIndex != -1) {
      this.monsters[monsterIndex] = monsterCopy;
    }
    this.save();
  }

  delete(id: number) {
    const monsterIndex = this.monsters.findIndex(orignalMonster => orignalMonster.id === id);
    if (monsterIndex != -1) {
      this.monsters.splice(monsterIndex, 1);
      //splice permet d'enlever un element dans un tableau a l'index seletcionné
    }
    this.save();

  }

}
