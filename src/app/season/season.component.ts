import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
@Input() lastMatch = [];
@Input() lastMatchResult = [];

headtohead : any;
resultData = []
  constructor(
private apiResponse : ApiService,
  ) { }

  ngOnInit() {
  }

htoh(click){
 	
    this.apiResponse.getLeagueAPIData(click).subscribe(data => {
    this.headtohead = data;

      this.resultData = [
	  {
	    "name": this.headtohead["fixture"]["awayTeamName"] + "-wins",
	    "value": this.headtohead["head2head"]["awayTeamWins"]
	  },
	  {
	    "name": this.headtohead["fixture"]["homeTeamName"] + "-wins",
	    "value": this.headtohead["head2head"]["homeTeamWins"]
	  },
	  	  {
	    "name": "Draw",
	    "value": this.headtohead["head2head"]["draws"]
	  }

	]
    
     
 });

    
    
    
}
}
