import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import * as menuReducer from '../../store/actions/menuToggle.actions';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  closeSidebar() {
    this.store.dispatch(menuReducer.closeMenu());
  }
}
