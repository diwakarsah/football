import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {
@Input() lastMatch = [];

htohResult : any;
  constructor(
private apiResponse : ApiService,
  ) { }

  ngOnInit() {
  }

htoh(click){
 	
    this.apiResponse.getLeagueAPIData(click).subscribe(data => {
    this.htohResult = data;
    
     
 });

    
    
    
}
}
