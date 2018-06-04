import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-performace',
 templateUrl: `./performace.component.html`,
  styleUrls: ['./performace.component.scss']
})
export class PerformaceComponent implements OnInit {
performance = [];

@Input() lastMatch = [];
  constructor(private apiResponse : ApiService,) { }

  ngOnInit() {

  let test = [];
  let count;
  	
          test = this.lastMatch["fixtures"];
          count = this.lastMatch["count"];

      	for(var i=1; i<=5 ; i++) {
      		this.performance.push(test[count-i]);
 
      	}
      	
      

  }

}

