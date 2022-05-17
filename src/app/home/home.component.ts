import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  smallTitle: string = "islands";
  showCaseImage: string = "../../assets/images/showCase/showCasePhoto.png";
  showCaseParagraph: string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur,\n" +
    "                  id libero maxime mollitia nobis officiis ratione reprehenderit ullam unde ut\n" +
    "                  Lorem ipsum dolor sit amet, consectetur adipisicing elit Consequatur";
  constructor() { }

  ngOnInit(): void {
  }

}
