import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import{FormsModule}from '@angular/forms'

@Component({
  selector: 'app-searchbox',
  standalone: true,
  imports: [NgxSpinnerModule,FormsModule],
  templateUrl: './searchbox.component.html',
  styleUrl: './searchbox.component.css'
})
export class SearchboxComponent {
  

}
