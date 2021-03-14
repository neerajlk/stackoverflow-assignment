import { Component, OnInit } from '@angular/core';
import { StackoverflowService } from '../../http/stackoverflow.service'
import { Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-stackoverflow-questions-listing',
  templateUrl: './stackoverflow-questions-listing.component.html',
  styleUrls: ['./stackoverflow-questions-listing.component.scss']
})
export class StackoverflowQuestionsListingComponent implements OnInit {
  questionsList
  sortingList = ['activity', 'votes', 'creation', 'relevance']
  orderList = [{ param: 'asc', name: 'Ascending' }, { param: 'desc', name: 'Descending' }]
  Accepted = ['YES', 'NO']
  Closed = ['YES', 'NO']

  previousPage: number = 1;
  total: number = 0;
  pageSizes = [15, 30, 50]
  pageSize: number = 15;
  pageNumber: number = 1;

  searchString = new FormControl('');
  order = 'desc'
  sort = 'activity'
  answered
  closed
  params = { filter: '', page: 1, pagesize: 10, order: 'desc', sort: 'activity', q: '', accepted: null, closed: null }
  constructor(
    private stakoverflowService: StackoverflowService
  ) { }

  ngOnInit(): void {
    this.getQuestionsList()
  }

  getQuestionsList() {
    this.params.filter = "!--1nZwQ7.ErY"
    this.params.page = this.pageNumber
    this.params.pagesize = this.pageSize
    this.params.q = this.searchString.value
    this.params.sort = this.sort
    this.params.order = this.order
    this.params.accepted = this.answered
    this.params.closed = this.closed

    console.log(this.params)

    this.stakoverflowService.getAllQuestions(this.params).subscribe(res => {
      this.questionsList = res['items']
      this.total = res['total']
      this.pageSize = res['page_size']
      this.pageNumber = res['page']
    })
  }

  getDataByPage(page) {
    this.pageNumber = page;
    this.getQuestionsList();
    return page;
  }

  applyFilter(parameter, paramType) {
    switch (paramType) {
      case 'pagesize': this.pageSize = parameter
        break
      case 'order': this.order = parameter
        break

      case 'answer': this.answered = (parameter == 'YES' ? true : false)
        break

      case 'closed': this.closed = (parameter == 'YES' ? true : false)
        break

      case 'sort': this.sort = parameter
        break

      default:
        break
    }

    this.getQuestionsList()
  }

}
