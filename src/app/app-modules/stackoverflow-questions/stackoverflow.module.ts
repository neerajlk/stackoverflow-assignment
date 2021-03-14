import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StackoverflowQuestionsListingComponent } from './components/stackoverflow-questions-listing/stackoverflow-questions-listing.component'
import { StackoverflowQuestionDetailComponent } from './components/stackoverflow-question-detail/stackoverflow-question-detail.component'


import { StackoverflowRoutingModule } from './stackoverflow.routing.module'

import { CoreModule } from '../../core/core.module'


@NgModule({
  declarations: [StackoverflowQuestionsListingComponent, StackoverflowQuestionDetailComponent],
  imports: [
    CommonModule,
    StackoverflowRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    NgxPaginationModule,
    FontAwesomeModule,
    CoreModule
  ]
})
export class stackoverflowModule { }
