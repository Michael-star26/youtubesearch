import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SearchboxComponent } from './searchbox/searchbox.component';
import { SearchresultsComponent } from './searchresults/searchresults.component';
import { YoutubesearchComponent } from './youtubesearch/youtubesearch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SearchboxComponent,SearchresultsComponent,YoutubesearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtubesearch';
}
