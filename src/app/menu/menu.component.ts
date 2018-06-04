import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Teams } from '../models/teams';

@Component({
  selector: 'app-menu',
  templateUrl: `./menu.component.html`,
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(private apiResponse : ApiService) { }

  ngOnInit() {

  }
  isIn = false;   // store state
    toggleState() { // click handler
        let bool = this.isIn;
        this.isIn = bool === false ? true : false; 
    }

}
