import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute  } from '@angular/router';
import { AuthenticationService } from './shared/authentication.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  returnUrl: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute){
    
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit(){
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    //this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f () {
    return this.loginForm.controls;
  }

  login() {
    
    this.authenticationService.login(this.f.email.value, this.f.password.value)
    .pipe(first())
    .subscribe(
      data => {
        this.router.navigate(['/dashboard/status'], data);
      },
      error => {
        //this.alertService.error(error);
        //this.loading = false;
    });
  }

}
