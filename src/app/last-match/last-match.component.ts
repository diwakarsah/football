import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-last-match',
  templateUrl: `./last-match.component.html`,
  styleUrls: ['./last-match.component.scss']
})
export class LastMatchComponent implements OnInit {

  @Input() lastMatch = [];
  constructor(
 private apiResponse : ApiService,
  ) { }

  ngOnInit() {

  
  }



}
