import { Component, OnInit } from '@angular/core';
import {ContactValue} from "../contactValue";


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contactImage: string = "../../assets/images/contact/contact2.jpg";

  constructor() { }

  ngOnInit(): void {
  }
  values = new ContactValue("Full Name", "Email Address", "Phone Number", "Password", "Message");

  onSubmitValue(): void{
    console.log(this.values)
  }

}
