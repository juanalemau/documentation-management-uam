import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { SharedModule } from '../../shared/shared.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth.routing';
import { NbButtonModule, NbInputModule} from '@nebular/theme';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule, 
    SharedModule,
    NbButtonModule,
    NbInputModule
  ]
})
export class AuthModule { }
