import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeSectionComponent } from './home-section/home-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  // {path:"home", component:HomeComponent},
  { path:"home", 
    component:HomeComponent,
    children: [
      {path:"homesection", component:HomeSectionComponent},
      {path:"aboutsection", component:AboutSectionComponent},
    ]
  }
  // {path:"home/homesection", component:HomeSectionComponent},
  // {path:"home/aboutsection", component:AboutSectionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
