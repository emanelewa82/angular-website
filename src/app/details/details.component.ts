import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ArticlesService} from "../articles.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
   private readonly id:any;
   specificDetails: any ;
  constructor(public activeRout: ActivatedRoute,
              public news:ArticlesService) {
     this.id = this.activeRout.snapshot.paramMap.get("id");
    this.news.getLatestNews().subscribe((result: { articles: any; })=>{
      // @ts-ignore
      this.specificDetails = result.articles[this.id]
     })
  }

  ngOnInit(): void {
  }

}
