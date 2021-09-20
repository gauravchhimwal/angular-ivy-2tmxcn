import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  students = [
    {
      id:"1",
      name:"hardik",
      email:"hardik@gmail.com",
      gender:"Male"
    }
  ]

}
