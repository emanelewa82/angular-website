import { Component, OnInit } from '@angular/core';
import { HelloComponentService} from "../hello-component.service";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  aboutSmallTitle: string = "about dragon";
  aboutParagraph : string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aspernatur atque deserunt doloribus dolorum enim eos esse facere harum in ipsum laudantium libero nam,\n" +
    "                    quis quisquam quod tempora! Aspernatur, corporis?" ;
  aboutImage : string  = "../../assets/images/about/about2.png";


  constructor( private hello : HelloComponentService ) { }

  ngOnInit(): void {
      this.hello.helloComponent("About")
  }

}
