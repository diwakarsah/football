import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Teams, LeagueTable, Competitions  } from './models/teams';
import { Observable } from 'rxjs';
import { DataTableItem } from './models/DataTableItem';
import {ListLeagueComponent} from './list-league/list-league.component';
import   'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  readonly ROOT_URL = 'http://api.football-data.org/v1';
  
  constructor(private http: HttpClient) {  

  }

  getLeagueAPIData(data){
    console.log(data);
    let headers = new HttpHeaders().set('X-Auth-Token','2037319975b84bb38e22152af675638e');
    return this.http.get(data, { headers }).map(result => result);
  }

  getCompetition(): Observable<Competitions[]> {
    let headers = new HttpHeaders().set('X-Auth-Token','2037319975b84bb38e22152af675638e');
    return this.http.get<Competitions[]>(this.ROOT_URL + '/competitions', { headers });
  }

}
