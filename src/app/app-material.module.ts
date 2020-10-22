import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
  ], exports: [
    MatSidenavModule,
    MatMenuModule,
    MatCardModule,
    MatDialogModule,
    MatSnackBarModule,
  ]
})
export class AppMaterialModule {
}
