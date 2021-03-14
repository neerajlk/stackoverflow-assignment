import { Component, OnInit } from '@angular/core';
import { StackoverflowService } from '../../http/stackoverflow.service'
import { Validators, FormControl } from '@angular/forms';
import { UtilityService } from '../../../../core/services/utilities.service'
import { faCog } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-stackoverflow-questions-listing',
  templateUrl: './stackoverflow-questions-listing.component.html',
  styleUrls: ['./stackoverflow-questions-listing.component.scss']
})
export class StackoverflowQuestionsListingComponent implements OnInit {
  cogIcon = faCog



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


  fromDate = new FormControl(null);
  fromDateEpoch
  toDate = new FormControl(null);
  toDateEpoch
  today = new Date().getFullYear() + '-' + ((new Date().getMonth() + 1) > 10 ? (new Date().getMonth() + 1) : '0' + (new Date().getMonth() + 1)) + '-' + new Date().getDate()

  searchString = new FormControl('');
  order = 'desc'
  sort = 'activity'
  answered
  closed
  params = { filter: '', page: 1, pagesize: 10, order: 'desc', sort: 'activity', q: '', accepted: '', closed: '', fromdate: '', todate: '' }
  constructor(
    private stakoverflowService: StackoverflowService,
    public utility: UtilityService
  ) { }

  ngOnInit(): void {
    console.log(this.today)
    this.getQuestionsList()
  }

  getQuestionsList() {
    this.prepareFilterObject()
    console.log(this.params)

    this.stakoverflowService.getAllQuestions(this.params).subscribe(res => {
      this.questionsList = res['items']
      this.total = res['total']
      this.pageSize = res['page_size']
      this.pageNumber = res['page']
    })
  }


  // Page Change event to get Data by page number
  getDataByPage(page) {
    this.pageNumber = page;
    this.getQuestionsList();
    return page;
  }

  // Common Function to apply Filter
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

      case 'fromdate':
        this.fromDateEpoch = parseInt(new Date(parameter).getTime().toString().substring(0, 10))
        break

      case 'todate': this.toDateEpoch = parseInt(new Date(parameter).getTime().toString().substring(0, 10))
        break

      default:
        break
    }

    this.getQuestionsList()
  }

  // prepares filter Object Payload for API call
  prepareFilterObject() {
    this.params.filter = "!3zl2.6Q8pq7Jx*BFj"
    this.params.page = this.pageNumber
    this.params.pagesize = this.pageSize
    this.params.q = this.searchString.value
    this.params.sort = this.sort
    this.params.order = this.order
    this.params.accepted = (this.answered || '')
    this.params.closed = (this.closed || '')
    this.params.fromdate = (this.fromDateEpoch || '')
    this.params.todate = (this.toDateEpoch || '')
  }

}
