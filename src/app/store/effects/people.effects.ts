import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as usersActions from '../actions/people.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {SharedService} from '../../services/shared/shared.service';
import {of} from 'rxjs';
import {PeopleService} from '../../services/people/people.service';

@Injectable()
export class PeopleEffects {
  constructor(private actions$: Actions,
              private peopleService: PeopleService,
              private sharedService: SharedService) {
  }


  loadPeople$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadPeople),
      mergeMap(
        (action) => this.peopleService.getPeople()
          .pipe(
            map(people => usersActions.loadPeopleSuccess({people}),
              catchError(err => {
                this.sharedService.sendAlert('Error load data');
                return of(usersActions.loadPeopleError({payload: err}));
              })))
      )
    )
  );
}
