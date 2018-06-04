import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-head-to-head',
  templateUrl: `./head-to-head.component.html`,
  styleUrls: ['./head-to-head.component.scss']
})
export class HeadToHeadComponent implements OnInit {
@Input() headtohead = [];
@Input() resultData = [];
@Input() lastMatchResult = [];

chartdata: boolean = false;

//Chart
view: any[] = [900, 300];
showLegend = true;
legendTitle: string = "Legend ";

colorScheme = {
domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
};
showLabels = true;
explodeSlices = false;
doughnut = false;


 constructor() { }

  ngOnInit() {
  	this.chartdata = true;
  }

}
