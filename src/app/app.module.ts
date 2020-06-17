import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';

import { AuthModule } from './modules/auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthLayoutComponent } from './layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ReactiveFormsModule } from '@angular/forms';

import { NavComponent } from './layout/nav/nav.component';

import { HttpClientModule }    from '@angular/common/http';

import { 
  NbThemeModule, 
  NbLayoutModule, 
  NbTabsetModule, 
  NbCardModule, 
  NbRouteTabsetModule,
  NbButtonModule,
  NbInputModule,
  NbSidebarModule,
  NbMenuModule,
  NbUserModule,
  NbDialogModule,
  NbDatepickerModule,
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({ 
  declarations: [
    AppComponent,
    AuthLayoutComponent,
    ContentLayoutComponent,
    NavComponent
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    SharedModule,
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbTabsetModule,
    NbCardModule,
    NbRouteTabsetModule,
    NbButtonModule,
    NbInputModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbUserModule,
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forChild(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
