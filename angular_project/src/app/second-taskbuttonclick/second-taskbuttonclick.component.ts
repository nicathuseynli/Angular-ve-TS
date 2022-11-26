import { Component } from '@angular/core';

@Component({
  selector: 'app-second-taskbuttonclick',
  templateUrl: './second-taskbuttonclick.component.html',
  styleUrls: ['./second-taskbuttonclick.component.css']
})
export class SecondTaskbuttonclickComponent {
 buttonclick="No server was created"
 btnClick(){
 this.buttonclick="Server was created"
 }
}
