import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-form',
  templateUrl: './temp-form.component.html',
  styleUrls: ['./temp-form.component.css']
})
export class TempFormComponent implements OnInit {

  username:string ="Sid";
  password:string ="xyz"
  constructor() { }

  ngOnInit() {
  }

}
