import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultSummaryComponent } from './result-summary.component';

const routes: Routes = [
  {path:"", component: ResultSummaryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultSummaryRoutingModule { }
