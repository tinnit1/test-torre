import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {PeopleComponent} from './pages/people/people.component';
import {ProfileComponent} from './pages/profile/profile.component';

const routes: Routes = [
  {path: '', component: PeopleComponent, data: {title: 'People'}},
  {path: 'profile', component: ProfileComponent, data: {title: 'Profile'}},
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
