import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';


@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {

    login;
  constructor(private builder: FormBuilder) { }

  ngOnInit() {

    this.login= this.builder.group({
      userName:["",Validators.required, Validators.minLength(5)],
      password: ["",Validators.minLength(8)],
      dob:[Validators.required]
    });
  }

}
