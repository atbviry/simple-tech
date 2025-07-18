import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster';

@Component({
  selector: 'app-playing-card',
  standalone: true,
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  // @Input()name: string = "My monster 2";
  // @Input()hp: number = 40;
  // @Input()figureCaption: string = "N°001 Monster"
  // @Input()attackName: string = "Geo Impact"
  // @Input()attackStrength: number = 60;
  // @Input()attackDescription: string = "This is a long description of a monster capacity.";

  //@Input( )monster:Monster = new Monster(); //à default de monster c'est un monstre inconnu (null)

  //on peux faire beaucoup des choses avec les Input
  // @Input({
  //   required: true //pour dire que mon input est obligatoire mais ce n'est pas mon but du coup je l'enlève
  // }
  // )monster:Monster = new Monster();

  // @Input({
  //   alias: 'my-monster'
  // }
  // ) monster: Monster = new Monster();

  // @Input({
  //   alias: 'my-monster',
  //   transform: (value: Monster) =>{
  //     value.hp = value.hp/2;
  //     return value;
  //   },
  // }
  // ) monster: Monster = new Monster();

  //utilisation signal input
  //monster: InputSignal<Monster> = input(new Monster());

  /* monster: InputSignal<Monster> = input(new Monster(), {
    alias: "my-monster",
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    }
  }); */
  //ou:

  monster: InputSignal<Monster> = input.required({
    alias: "my-monster",
    transform: (value: Monster) => {
      value.hp = value.hp / 2;
      return value;
    }
  });

}
