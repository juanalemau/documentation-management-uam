import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { StatusComponent } from './page/status/status.component';
import { DocumentationComponent } from './page/documentation/documentation.component';
import { ProfileComponent } from './page/profile/profile.component'

import { 
  NbButtonModule, 
  NbInputModule, 
  NbSidebarModule, 
  NbMenuModule, 
  NbUserModule,
  NbCardModule,
  NbIconModule,
  NbStepperModule,
  NbSelectModule,
  NbDatepickerModule
} from '@nebular/theme';

@NgModule({
  declarations: [StatusComponent, DocumentationComponent, ProfileComponent],
  imports: [
    HomeRoutingModule,
    SharedModule,
    NbButtonModule,
    NbInputModule,
    NbSidebarModule,
    NbMenuModule,
    NbUserModule,
    NbCardModule,
    NbIconModule,
    NbStepperModule,
    NbSelectModule,
    NbDatepickerModule
  ]
})
export class HomeModule { }
