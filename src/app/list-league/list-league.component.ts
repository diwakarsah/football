import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Competitions } from '../models/teams';
import { LeagueTable } from '../models/teams';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-list-league',
  templateUrl: `./list.league.component.html`,
  styleUrls: ['./list.league.component.scss']
})
export class ListLeagueComponent implements OnInit {

  competitionList: Competitions[];
  leagueTableList : any;
  public componentURL : string;
  chart = [];

  constructor(private apiResponse : ApiService) { }


  ngOnInit() {
    this.apiResponse.getCompetition().subscribe(data => {
      this.competitionList = data
       console.log("check");
        console.log(this.competitionList);
    });
  }

  leagueTableLink(click){
    let matchWin = [];
    let matchDraws = [];
    let teamName = [];
    this.apiResponse.getLeagueAPIData(click).subscribe(data => {
      this.leagueTableList = data;
      let standing = data['standing'];
      console.log("Check standing");
      console.log(standing);
      let i = 0;
  
      standing.forEach(element => {
        
        if( i < 5){
        matchWin.push(element.away.wins);
        matchDraws.push(element.away.draws);
        teamName.push(element.teamName);
      }
        i = i + 1;
      });
    });


/**
    this.chart = new Chart('canvas', {
      type: 'line',
      data: {
        labels: teamName,
        datasets: [
          {
            data: matchDraws,
            borderColor: '#3cba9f',
            fill: false
          },
          {
            data: matchWin,
            borderColor: '#3cba9f',
            fill: false
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            display: true
          }],
          yAxes: [{
            display: true
          }]
        }
      }
    })**/
  }

  

}
