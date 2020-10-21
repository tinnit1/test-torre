import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState} from './store/app.reducer';
import {Store} from '@ngrx/store';
import {RootObject} from './models/rootObject';
import {loadUser} from './store/actions';
import * as menuReducer from '../app/store/actions/menuToggle.actions';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  uiSubscription: Subscription;
  open: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnDestroy(): void {
    this.uiSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.uiSubscription = this.store.select('menuToggle').subscribe(menuState => this.open = menuState.toggle);
  }

  close() {
    this.store.dispatch(menuReducer.closeMenu());
  }
}
