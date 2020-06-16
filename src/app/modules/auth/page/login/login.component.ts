import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router){
    this.buildForm();
  }

  ngOnInit(){}

  get f () {
    return this.loginForm.controls;
  }

  login() {
    //console.log(this.loginForm.value);
    this.router.navigate(['/dashboard/status'])
  }

  private buildForm(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
