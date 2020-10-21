import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PeopleComponent } from './people/people.component';
import { PersonsComponent } from './persons/persons.component';



@NgModule({
  declarations: [ProfileComponent, PeopleComponent, PersonsComponent],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
