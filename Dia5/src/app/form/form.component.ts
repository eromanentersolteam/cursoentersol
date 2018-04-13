import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  xForm : FormGroup;
  constructor(private form : FormBuilder, private apiService: ApiService) { 
  }

  ngOnInit() {
    this.xForm = this.form.group({
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(4)])],
      'permisos' : ['ADMIN', Validators.required]
    })
  }

  Enviar(Data) {
    this.apiService.peticionPost(Data).subscribe( res => console.log(res));
  }

}
