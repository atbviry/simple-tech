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
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent{

}
