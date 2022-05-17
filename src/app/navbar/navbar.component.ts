import { Component, OnInit } from '@angular/core';
import {ElementRef, HostListener} from "@angular/core";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarFixed : boolean = false;

  constructor(private el: ElementRef) { }

  ngOnInit(): void {}
  private changeClass( ):void{}

  @HostListener ('window:scroll')onScroll(){
     if(window.scrollY > 100){
       this.navbarFixed = true
     }else {
       this.navbarFixed = false
     }
  }

}
