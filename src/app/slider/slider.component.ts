import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: `./slider.component.html`,
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }
  imageUrls : string  = "../assets/images/football.jpg"

  ngOnInit() {
 
  }
}
