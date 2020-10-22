import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderNavigationComponent } from './header-navigation/header-navigation.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [HeaderNavigationComponent, SidenavComponent],
  exports: [HeaderNavigationComponent, SidenavComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
