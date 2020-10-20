import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SharedService} from '../shared/shared.service';
import {RootObject} from '../../models/rootObject';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public http: HttpClient, private sharedService: SharedService) { }

  getUser(username: string = 'juanpalacor'){
    return  this.http.get(`${this.sharedService.apiUrl}bios/${username}`)
      .pipe(
        map((data: any) => data)
      );
    }
}
