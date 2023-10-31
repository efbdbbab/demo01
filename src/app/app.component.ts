import { Component } from '@angular/core';
import {LoginComponent} from "../login/ts/login.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo01';
  protected readonly LoginComponent = LoginComponent;
}
