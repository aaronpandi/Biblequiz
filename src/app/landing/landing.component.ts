import { Component, OnInit } from '@angular/core';
// import { QuizServiceService } from '../shared/quiz-service.service';
// import { Router } from '@angular/router';
// import {} from 'lodash'

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  collapedSideBar: boolean;
  constructor() { }

  ngOnInit() {
  }
  
  receiveCollapsed($event) {
    this.collapedSideBar = $event;
}

}
