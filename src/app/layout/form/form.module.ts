import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';
import { PageHeaderModule } from './../../shared';
// import { QuizListComponent } from '../quiz-list/quiz-list.component';

@NgModule({
    imports: [CommonModule, FormRoutingModule, PageHeaderModule, FormsModule, ReactiveFormsModule, NgbModule],
    declarations: [FormComponent]
})
export class FormModule {}
