import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) { }

   loginForm;

  ngOnInit() {
  }

}
