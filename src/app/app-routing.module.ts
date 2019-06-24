import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { RegisterComponent } from './register/register.component';
// import { QuizComponent } from './quiz/quiz.component';
// import { ResultComponent } from './result/result.component';
// import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AuthGuardCanDeactivateService } from './auth/auth-guard-can-deactivate.service';
// import { LandingComponent } from './landing/landing.component';
// import { TestScreenComponent } from './test-screen/test-screen.component';
// import { HomeComponent } from './home/home.component';
// import { HeaderComponent } from './component/header/header.component';
// import { SidebarComponent } from './component/sidebar/sidebar.component';

export const Quizroutes: Routes = [
  // {path: "", redirectTo: "home", pathMatch: "prefix"},
  // {path: "home", loadChildren:"./home/home.module#HomeModule"},
  // {path: "home", component: HomeComponent},
  // {path:"register", component: RegisterComponent },
  // {path: "quiz", component: QuizComponent, canActivate: [AuthGuard]},
  // {path: "result", component: ResultComponent, canActivate: [AuthGuard]},
  // {path: "landing", component: LandingComponent, canActivate: [AuthGuard]},
  // {path:"landing", loadChildren:"./landing/landing.module#LandingModule" },
  {path:"", loadChildren:"./layout/layout.module#LayoutModule", canActivate: [AuthGuard] },
  // {path: "home", loadChildren:"./home/home.module#HomeModule"},
  // {path:"Navigation", component: TestScreenComponent },
  {path:"login", loadChildren:"./login/login.module#LoginModule" },
  {path:"signup", loadChildren:"./signup/signup.module#SignupModule" },
  {path:"disclaimer", loadChildren:"./disclaimer/disclaimer.module#DisclaimerModule" , canActivate: [AuthGuard]},
  { path: "quiz"
    ,loadChildren:"./quiz/quiz.module#QuizModule"
    ,canActivate: [AuthGuard]
    ,canDeactivate: [AuthGuardCanDeactivateService]
  },
  {path:"logout", loadChildren:"./logout/logout.module#LogoutModule" },
  
  // {path: "login", component: LoginComponent},
  // {path: "header", component: HeaderComponent},
  // {path: "sidebar", component: SidebarComponent},
  // {path: "", redirectTo: "/home", pathMatch: "full"},
  {path: "**", redirectTo: "/login", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(Quizroutes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
