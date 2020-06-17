import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../auth/page/login/shared/authentication.service';
import { UserService } from './shared/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ){}

  get f () {
    return this.registerForm.controls;
  }

  ngOnInit(){
    this.registerForm = this.formBuilder.group({
      email: ['', Validators.required],
      cellphone: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  register(){
    this.userService.register(this.registerForm.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/auth/login']);
      },
      error => {
      
      });
  }
}
