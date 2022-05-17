import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
formLogin = new FormGroup({
  inputUser : new FormControl("Username", Validators.required),
  inputPass: new FormControl("Password",[Validators.required, Validators.minLength(8)])
});
  get inputUser(){
    return this.formLogin.get("inputUser")
  }
  get inputPass(){
    return this.formLogin.get("inputPass")
  }
  onFormSubmit() : void{
    console.log(this.formLogin.value)
  }


}
