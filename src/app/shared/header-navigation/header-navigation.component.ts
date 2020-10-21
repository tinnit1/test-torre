import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';
import * as menuReducer from '../../store/actions/menuToggle.actions';
import {Subscription} from 'rxjs';
import {RootObject} from '../../models/rootObject';
import {loadUser} from '../../store/actions';

@Component({
  selector: 'app-header-navigation',
  templateUrl: './header-navigation.component.html',
  styleUrls: ['./header-navigation.component.css']
})
export class HeaderNavigationComponent implements OnInit, OnDestroy {

  uiSubscription: Subscription;
  userSubscription: Subscription;
  open: boolean;
  user: RootObject;
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {
  }

  ngOnDestroy(): void {
    this.uiSubscription?.unsubscribe();
    this.userSubscription?.unsubscribe();
  }

  ngOnInit(): void {
    this.uiSubscription = this.store.select('menuToggle').subscribe(menuState => this.open = menuState.toggle);
    this.store.select('user').subscribe(({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadUser());
  }

  getImage(): string {
    if (!!!this.user?.person.picture) {
      return null;
    }
    return this.user.person.picture;
  }

  toggleRightSidenav() {
    if (this.open) {
      this.store.dispatch(menuReducer.closeMenu());
    } else {
      this.store.dispatch(menuReducer.openMenu());
    }
  }

}
