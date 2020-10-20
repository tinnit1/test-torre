import { Injectable } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  apiUrl = environment.apiUrl;
  constructor(private _snackBar: MatSnackBar) { }

  sendAlert(text: string) {
    this._snackBar.open(text, null, {
      duration: 2000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
    });
  }
}
