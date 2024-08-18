import { Component } from '@angular/core';
import { SearchboxComponent } from '../searchbox/searchbox.component';
import { SearchresultsComponent } from '../searchresults/searchresults.component';
@Component({
  selector: 'app-youtubesearch',
  standalone: true,
  imports: [SearchboxComponent,SearchresultsComponent],
  templateUrl: './youtubesearch.component.html',
  styleUrl: './youtubesearch.component.css'
})
export class YoutubesearchComponent {

}
