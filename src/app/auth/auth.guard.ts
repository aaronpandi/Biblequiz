import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/shared/quiz-service.service';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor (private Quizrouter: Router, private quizservice: QuizServiceService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      // console.log(localStorage.getItem('participant') );

      console.log("Auth Validation");
      // console.log(localStorage.getItem('userLoggedIn'));
      // console.log(this.Quizrouter. );
      
      if (localStorage.getItem('participant') != null && localStorage.getItem('userLoggedIn') != null)
      {
        console.log(localStorage.getItem('participant'));

        return true;
      }
      else
      {
        this.Quizrouter.navigate(['/login']);
        return false;
      }
  }
}
