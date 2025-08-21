import { Component, EventEmitter, input, Input, model, output, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {

  //ici le nom de mon evenement est searchButtonClicked
  // @Output() searchButtonClicked: EventEmitter = new EventEmitter<string>();
  //je veux utilser mon output avec alias et c'est le nom submit
  // @Output('submit') searchButtonClicked = new EventEmitter<string>();

  //@Input() search = 'Initial';
  
  //@Output() searchChange = new EventEmitter<string>();

//nouvelle version de output
 //searchButtonClicked = output();
 //avec alias 
 searchButtonClicked = output({alias : 'submit'});

//je fait pareil   pour search et searchChange
//  search = input<string>('Initial');
//  searchChange = output<string>();

 //avec la fonction model (1)
 search = model<string>('Initial');

  searchClick(): void {
    console.log('Click');
    this.searchButtonClicked.emit();
  }

  // updateSearch(value: string) {
  //   this.searchChange.emit(value);

  // }

  // avec la fonction model (2)
  // updateSearch(value: string) {
  //   this.search.set(value);

  // }

  // encore mieux (3): effacer le fonction updateSearch
  // updateSearch(value: string) {
  //   this.search.set(value);

  // }

}
