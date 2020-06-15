import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-layout',
  templateUrl: './auth-layout.component.html',
  styleUrls: ['./auth-layout.component.scss']
})
export class AuthLayoutComponent{

  tabs: any[] = [
    {
      title: 'Login',
      responsive: true,
      route: '/auth/login',
    },
    {
      title: 'Inscrição',
      responsive: true,
      route: '/auth/register',
    }
  ];

}
