import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from './people/people.component';
import {ProfileComponent} from './profile/profile.component';

const pagesRoutes: Routes = [
  {path: '', component: PeopleComponent, data: {title: 'People'}},
  {path: 'profile', component: ProfileComponent, data: {title: 'Profile'}},
];

@NgModule({
  imports: [RouterModule.forRoot(pagesRoutes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
