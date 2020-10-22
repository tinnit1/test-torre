import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../shared/shared.service';
import {map} from 'rxjs/operators';
import {Member} from '../../models/member';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(public http: HttpClient, private sharedService: SharedService) {
  }

  getPeople() {
    const members: Member[] = [];
    return this.http.post(`https://search.torre.co/opportunities/_search`, {})
      .pipe(
        map((data: any) => {
          return data.results.map((e: any) => e.members[0]);
        })
      );
  }
}
