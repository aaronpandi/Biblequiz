import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { ResultSummaryRoutingModule } from './result-summary-routing.module';
import { ResultSummaryComponent } from './result-summary.component';

@NgModule({
  declarations: [ResultSummaryComponent],
  imports: [
    CommonModule,
    ResultSummaryRoutingModule,
    NgbCarouselModule,
    NgbAlertModule,
    
  ]
})
export class ResultSummaryModule { }
