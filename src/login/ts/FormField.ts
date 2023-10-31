import {Component} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

/** @title Simple form field */
@Component({
  selector: 'form-field',
  templateUrl: '../html/FormField.html',
  styleUrls: ['../css/FormField.css'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule,MatIconModule,MatButtonModule],
})
export class FormFieldOverviewExample {
  hide = false;
}
