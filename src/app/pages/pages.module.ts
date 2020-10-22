import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile.component';
import { PeopleComponent } from './people/people.component';
import {AppMaterialModule} from '../app-material.module';
import {BrowserModule} from '@angular/platform-browser';



@NgModule({
  declarations: [ProfileComponent, PeopleComponent],
  imports: [
    CommonModule,
    AppMaterialModule
  ]
})
export class PagesModule { }
