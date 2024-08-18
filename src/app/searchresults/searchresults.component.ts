import { HttpClient } from '@angular/common/http';
import { Component ,OnInit } from '@angular/core';
import { NgxSpinnerModule } from "ngx-spinner";
import { NgxSpinnerService } from "ngx-spinner";
import { SearchboxComponent } from '../searchbox/searchbox.component';
import { YoutubeService } from '../services/usearch.service';
import { takeUntil } from 'rxjs';
import { CommonModule } from '@angular/common';
import{FormsModule}from '@angular/forms'

@Component({
  selector: 'app-searchresults',
  standalone: true,
  imports: [NgxSpinnerModule,SearchboxComponent,CommonModule,FormsModule],
  templateUrl: './searchresults.component.html',
  styleUrl: './searchresults.component.css'
})
export class SearchresultsComponent implements OnInit{
  constructor(private spinner: NgxSpinnerService,private youtubeService:YoutubeService) {
    let titles=this.title
  }
  title?:any
  error?:any

  search(title:HTMLInputElement){
    this.title=title.value
    this.videos = [];
    this.youtubeService
    .getVideos(title.value, 20)
    .subscribe((list:any) => {
    for (let element of list["items"]) {
    this.videos.push(element)
    }
    });
    
  }
  
  ngOnInit(): void {
  this.spinner.show();

  setTimeout(() => {
    /** spinner ends after 5 seconds */
    this.spinner.hide();
  }, 3000);

  this.videos = [];
  this.youtubeService
  .getVideos('coding', 50)
  .subscribe((list:any) => {
  for (let element of list["items"]) {
  this.videos.push(element)
  }
  }
);
  }

  videos!:any[]
  
  
}
