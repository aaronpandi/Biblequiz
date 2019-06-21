import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
// import { WelcomeComponent } from './welcome/welcome.component';
// import { QuizSummaryComponent } from './quiz-summary/quiz-summary.component';
// import { ResultSummaryComponent } from './result-summary/result-summary.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HeaderComponent } from './component/header/header.component';
import { TranslateModule } from '@ngx-translate/core';
// import { ResultSummaryModule } from './result-summary/result-summary.module';
// import { WelcomeModule } from './welcome/welcome.module';
// import { QuizSummaryModule } from './quiz-summary/quiz-summary.module';
// import { QuizServiceService } from '../shared/quiz-service.service';


@NgModule({
  declarations: [
    LandingComponent,
    // QuizSummaryComponent, 
    // WelcomeComponent, 
    // ResultSummaryComponent, 
    SidebarComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    TranslateModule,
    // WelcomeModule,
    // WelcomeModule,
    // QuizSummaryModule,
    // ResultSummaryModule
  ]
})
export class LandingModule { }
