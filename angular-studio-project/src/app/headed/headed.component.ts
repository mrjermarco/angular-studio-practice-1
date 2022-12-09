import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headed',
  templateUrl: './headed.component.html',
  styleUrls: ['./headed.component.css']
})
export class HeadedComponent implements OnInit {

  missionName: string = "mars 2030";
  rocketName: string = "Plasma Max";

  constructor() { }

  ngOnInit(): void {
  }

}
