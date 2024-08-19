import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  apiKey:string = 'AIzaSyBUPeN0QhQgTYHSqhWVR73KX0yi95Adfak';

  constructor(public http: HttpClient) { }

    getVideos(title:any, maxResults:any): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&title=' + title + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults + '&q='+title
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }
}