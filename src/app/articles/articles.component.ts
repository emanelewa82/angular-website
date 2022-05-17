import { Component, OnInit } from '@angular/core';
import { ArticlesService} from "../articles.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articlesData : any = [];
  constructor(public articlesNews : ArticlesService) { }

  ngOnInit(): void {
    this.articlesNews.getLatestNews().subscribe((data: { articles: any })=>{
      this.articlesData = data.articles
    })
  }

}
