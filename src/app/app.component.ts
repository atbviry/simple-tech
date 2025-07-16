import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PlayingCardComponent } from './composants/playing-card/playing-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PlayingCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'simple-tech';
}
