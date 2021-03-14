import { Injectable } from '@angular/core';

import { BaseService } from '../../../core/http/base.service';

@Injectable({
  providedIn: 'root',
})
export class StackoverflowService {
  constructor(private BaseService: BaseService) { }

  getAllQuestions(params) {
    const subURL = '/search/advanced'
    return this.BaseService.GET(subURL, params);
  }

  getQuestionsDetailsById(id) {
    const subURL = `/questions/${id}`
    return this.BaseService.GET(subURL, {filter:"!9_bDDxJY5"});
  }

  getPostAnswersById(id) {
    const subURL = `/questions/${id}/answers`
    return this.BaseService.GET(subURL, {filter:"!9_bDE(fI5"});
  }

  getPostCommentsById(id) {
    const subURL = `/questions/${id}/comments`
    return this.BaseService.GET(subURL, {filter:"!9_bDE0E4s"});
  }

}