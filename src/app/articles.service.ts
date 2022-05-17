import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  url : string ="https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=7ae801f9353349839d6630a5c9544a4e" ;

  constructor(public articles : HttpClient) { }
  getLatestNews() : any {
    try {
      return this.articles.get(this.url)

    }catch (e) {
      // @ts-ignore
      console.log(e.message)
    }
  }

}
