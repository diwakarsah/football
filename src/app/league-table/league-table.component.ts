import { Component, OnInit, Input} from '@angular/core';
import { ApiService } from '../api.service';
import { LeagueTable } from '../models/teams';

import { ListLeagueComponent } from '../list-league/list-league.component';

@Component({
  selector: 'app-league-table',
  templateUrl: `./league-table.component.html`,
  styleUrls: ['./league-table.component.scss']
})

export class LeagueTableComponent implements OnInit {

	teams :  any;
	fixtures : any;
	link : string;

  @Input() leagueTable = [];

  constructor(
    private apiResponse : ApiService,
  ) { }

  ngOnInit() {
  }

 TeamsInfo(click){
 	console.log(click, "click");
    this.apiResponse.getLeagueAPIData(click).subscribe(data => {
    this.teams = data;
    this.link = this.teams._links.fixtures.href;
 	console.log(this.link , "link");
     this.apiResponse.getLeagueAPIData(this.link).subscribe(data => {

      this.fixtures = data;
     
    
    });
    
 });

    
    
    
}

}




   