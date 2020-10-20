import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {UserService} from '../../services/user/user.service';
import * as usersActions from '../actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {SharedService} from '../../services/shared/shared.service';
import {of} from 'rxjs';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions,
              private userService: UserService,
              private sharedService: SharedService) {
  }


  loadUser$ = createEffect(
    () => this.actions$.pipe(
      ofType(usersActions.loadUser),
      mergeMap(
        (action) => this.userService.getUser()
          .pipe(
            map(user => usersActions.loadUserSuccess({user}),
              catchError(err => {
                this.sharedService.sendAlert('Error load data');
                return of(usersActions.loadUserError({payload: err}));
              })))
      )
    )
  );
}
