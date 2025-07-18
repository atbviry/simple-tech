import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './composants/playing-card/playing-card.component';
import { Monster } from './models/monster';
import { SearchBarComponent } from './composants/search-bar/search-bar.component';

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
export class AppComponent implements OnInit{
  monster1!: Monster;

  // constructor() {
  //   this.monster1 = new Monster();
  //   this.monster1.name = "Pik";
  //   this.monster1.hp = 45;
  //    this.monster1.figureCaption= "N° 25 Monster";
  //   this.monster1.attackDescription = "This is a long description of a monster capacity.";
  // }
  ngOnInit(): void {
   this.monster1 = new Monster();
    this.monster1.name = "Pik";
    this.monster1.hp = 45;
     this.monster1.figureCaption= "N° 25 Monster";
    this.monster1.attackDescription = "This is a long description of a monster capacity.";
  }
}
