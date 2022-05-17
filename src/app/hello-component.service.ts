import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloComponentService {

  constructor() { }
    helloComponent (componentName: string) : void{
   console.log(`hello ${componentName}`)
    }
}
