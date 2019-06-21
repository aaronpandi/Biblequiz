import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisclaimerRoutingModule } from './disclaimer-routing.module';
import { DisclaimerComponent } from './disclaimer.component';


@NgModule({
  declarations: [DisclaimerComponent],
  imports: [
    CommonModule,
    DisclaimerRoutingModule
  ]
})
export class DisclaimerModule { }
