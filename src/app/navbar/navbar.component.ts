import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from '../shared/quiz-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public quizservice: QuizServiceService, private quizrouter: Router) { }

  ngOnInit() {
  }

  signOut() {
    localStorage.clear();
    clearInterval(this.quizservice.timer);
    this.quizrouter.navigate(['/register']);
}

}
