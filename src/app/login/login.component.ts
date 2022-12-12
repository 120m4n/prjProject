import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { Panel } from 'primeng/panel';
import { LoginResponse } from '../models/login-response';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({});

  submitted = false;

  response : LoginResponse;

  constructor(private loginService : LoginService, public router: Router ) { 
    this.response = {
      success : false,
      message : '',
      data: {
        token : '',
        usuario: ''
      }
    }
  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log(this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe(
      (data) => {
        this.response = data;
        console.log(this.response);
        localStorage.setItem('token', this.response.data.token);    
        //redirect to /padre
        this.router.navigate(['padre']);
      }
    ); 




  }

}
