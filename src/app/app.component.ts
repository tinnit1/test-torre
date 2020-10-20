import {Component, OnInit} from '@angular/core';
import {AppState} from './store/app.reducer';
import {Store} from '@ngrx/store';
import {RootObject} from './models/rootObject';
import {loadUser} from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'test-torre';
  user: RootObject;
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.select('user').subscribe(({user, loading, error}) => {
      this.user = user;
      this.loading = loading;
      this.error = error;
    });
    this.store.dispatch(loadUser());
  }
}
