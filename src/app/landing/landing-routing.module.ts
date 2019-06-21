import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
// import { QuizSummaryComponent } from './quiz-summary/quiz-summary.component';
// import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: "", 
    component: LandingComponent,
    children: [
      {path:"", redirectTo: "welcome", pathMatch: "prefix"},
      // {path:"quizsummary", component:WelcomeComponent },
      {path:"resultsummary", loadChildren : "./result-summary/result-summary.module#ResultSummaryModule"},
      {path:"welcome", loadChildren : "./welcome/welcome.module#WelcomeModule"}
      // {path:"quiz", component: QuizSummaryComponent,  }

    ]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }
