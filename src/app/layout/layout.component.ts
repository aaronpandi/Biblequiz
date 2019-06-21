import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../shared/quiz-service.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean;

    constructor(public quizservice: QuizServiceService) {}

    ngOnInit() { 
            this.quizservice.LoggedInUser = localStorage.getItem('userLoggedIn')
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
    }
}
