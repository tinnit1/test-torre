import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {RootObject} from '../../models/rootObject';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy {
  userSubscription: Subscription;
  user: RootObject;
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('user').subscribe(({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.userSubscription?.unsubscribe();
  }

  getImage(): string {
    if (!!!this.user?.person.picture) {
      return null;
    }
    return this.user.person.picture;
  }

}
