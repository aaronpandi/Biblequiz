import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ToastrModule, ToastrService, ToastContainerModule} from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, Quizroutes } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DatePipe } from '@angular/common';
// import { RegisterComponent } from './register/register.component';
// import { QuizComponent } from './quiz/quiz.component';
// import { LoginComponent } from './login/login.component';
// import { ResultComponent } from './result/result.component';
import { QuestionsComponent } from './questions/questions.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { QuizServiceService } from './shared/quiz-service.service';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuardCanDeactivateService } from './auth/auth-guard-can-deactivate.service';
// import { LandingComponent } from './landing/landing.component';
import { TestScreenComponent } from './test-screen/test-screen.component';
import { HomeModule } from './home/home.module';
// import { LandingModule } from './landing/landing.module';
// import { ModuleComponent } from './module/module.component';
// import { SidebarComponent } from './component/sidebar/sidebar.component';
// import { HeaderComponent } from './component/header/header.component';
import { LanguageTranslationModule } from './shared/modules/language-translation/language-translation.module'
import {DisclaimerModule}  from './disclaimer/disclaimer.module';

// import {lodash} from 'lodash';


@NgModule({
  declarations: [
    AppComponent,
    // QuizComponent,
    // ResultComponent,
    QuestionsComponent,
    NavbarComponent,
    // LandingComponent,
    TestScreenComponent
      ],
  imports: [
    BrowserModule,
    FormsModule,HttpClientModule, 
    ToastrModule.forRoot(), 
    // {timeOut: 10000,positionClass: 'toast-bottom-right'} 
    ToastContainerModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(Quizroutes),
    HomeModule,
    LanguageTranslationModule,
    AppRoutingModule,
    DisclaimerModule
    // LandingModule
  ],
  providers: [QuizServiceService, AuthGuard, AuthGuardCanDeactivateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
