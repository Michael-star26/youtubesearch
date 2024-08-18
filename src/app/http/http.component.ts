import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';

@Component({
  selector: 'app-http',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './http.component.html',
  styleUrl: './http.component.css'
})
export class HttpComponent implements OnInit{
  ngOnInit(): void {}
  data?:Object
  loading?:boolean
  constructor(private http:HttpClient){}
  makeRequest(){
    this.http
    .get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data=>{
      this.data=data
      this.loading=false
    })
  }
}
