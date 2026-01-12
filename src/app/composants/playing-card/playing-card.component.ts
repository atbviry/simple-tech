import { Component, computed, input, Input, InputSignal, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Monster } from '../../models/monster';
import { MonsterTypeProperties } from '../utils/monster.utils';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  
  /* monster: InputSignal<Monster> = input.required({
    alias: "my-monster",
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    }
  }); */

  //@Input() monster = new Monster();
  monster = input<Monster>(new Monster());
  // monsterTypeIcon: string = 'assets/img/electric.png'; //l'electric par defaut
	// backgroundColor: string = 'rgba(255, 255, 104, 1)'; //le jaune par defaut

  // monsterTypeIcon!: string; //l'electric par defaut
	// backgroundColor!: string; //le jaune par defaut

  monsterTypeIcon = computed (() => {
    return MonsterTypeProperties[this.monster().type].imagreUrl;
  }); //l'electric par defaut
	backgroundColor = computed (() => {
    return MonsterTypeProperties[this.monster().type].color;
  }); //le jaune par defaut


  // constructor() {
  //   //debugger;
  //   this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imagreUrl;
  //   this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
  // }

  // ngOnInit(): void {
  //  debugger;
  //   this.monsterTypeIcon = MonsterTypeProperties[this.monster.type].imagreUrl;
  //   this.backgroundColor = MonsterTypeProperties[this.monster.type].color;
  // }

// ngOnChanges(changes: SimpleChanges): void {
//     if(changes['monster']) {
//       if(changes['monster'].previousValue?.type != changes['monster'].currentValue.type) {
//         this.monsterTypeIcon = MonsterTypeProperties[this.monster().type].imagreUrl;
//         this.backgroundColor = MonsterTypeProperties[this.monster().type].color;
//       }
//     }
//   }

}
