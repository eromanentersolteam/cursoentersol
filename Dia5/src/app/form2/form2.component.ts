import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators, Validator } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
  registroForm : FormGroup;
  constructor(private form : FormBuilder, private apiService: ApiService) { }

  ngOnInit() {
    this.registroForm = this.form.group({
      'nombres' : [null, Validators.compose([Validators.required, Validators.pattern("[A-Za-zÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+")])],
      'ap_pat' : [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+")])],
      'ap_mat' : [null, Validators.compose([Validators.required, Validators.pattern("[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1_ ]+")])],
      'edad' : [null, Validators.compose([Validators.required, Validators.min(18), Validators.max(70)])],
      'email' : [null, Validators.compose([Validators.required, Validators.email])],
      'password' : [null, Validators.compose([Validators.required, Validators.minLength(6),Validators.maxLength(10)])],
      'genero' : ['Masculino', Validators.required]
    })
  }

  Enviar(Data) {
    this.apiService.peticionPost(Data).subscribe( res => console.log(res));
  }

}
