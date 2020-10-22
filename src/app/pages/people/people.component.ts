import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Member} from '../../models/member';
import {loadPeople, loadUser} from '../../store/actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../store/app.reducer';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  peopleSubscription: Subscription;
  people: Member[];
  loading = false;
  error: any;

  constructor(private store: Store<AppState>) {
    this.store.select('people').subscribe(({people, loading, error}) => {
      this.people = people;
      this.loading = loading;
      this.error = error;
    });
  }

  ngOnInit(): void {
    this.store.dispatch(loadPeople());
  }

}
