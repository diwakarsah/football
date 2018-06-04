import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-head-to-head',
  templateUrl: `./head-to-head.component.html`,
  styleUrls: ['./head-to-head.component.scss']
})
export class HeadToHeadComponent implements OnInit {
@Input() headtohead = [];

chartdata: boolean = false;
countryData = [];

//Chart
view: any[] = [500, 300];
showLegend = true;

colorScheme = {
domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};
showLabels = true;
explodeSlices = false;
doughnut = false;


  constructor() { }

  ngOnInit() {
  this.chartdata = true;
  console.log(this.headtohead,"Head to Head object");
    this.countryData = [];
  this.countryData = [
	  {
	    "name": "Germany",
	    "value": 8940000
	  },
	  {
	    "name": "USA",
	    "value": 5000000
	  }
	]
  }

}
