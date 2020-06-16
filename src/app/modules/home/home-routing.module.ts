import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StatusComponent } from './page/status/status.component';
import { DocumentationComponent } from './page/documentation/documentation.component';
import { ProfileComponent } from './page/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'status',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'status',
        component: StatusComponent
      },
      {
        path: 'documentation',
        component: DocumentationComponent
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
