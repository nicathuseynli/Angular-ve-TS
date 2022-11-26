import { Component } from '@angular/core';

@Component({
  selector: 'app-third-task',
  templateUrl: './third-task.component.html',
  styleUrls: ['./third-task.component.css']
})
export class ThirdTaskComponent {
  buttonShare=true
  constructor(){this.btnShare()}
  btnShare(){setTimeout(() =>this.buttonShare=false,2000);    }
}
