import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StackoverflowQuestionsListingComponent } from './components/stackoverflow-questions-listing/stackoverflow-questions-listing.component'
import { StackoverflowQuestionDetailComponent } from './components/stackoverflow-question-detail/stackoverflow-question-detail.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/stackoverflow/questions',
    pathMatch: 'full'
  },
  {
    path: 'questions',
    component: StackoverflowQuestionsListingComponent
  },
  {
    path: 'questions/:id',
    component: StackoverflowQuestionDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StackoverflowRoutingModule { }
