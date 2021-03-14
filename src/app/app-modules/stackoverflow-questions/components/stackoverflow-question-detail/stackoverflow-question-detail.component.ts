import { Component, OnInit } from '@angular/core';
import { StackoverflowService } from '../../http/stackoverflow.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { faCaretUp, faCaretDown, faBookmark, faRedo, faCheck } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-stackoverflow-question-detail',
  templateUrl: './stackoverflow-question-detail.component.html',
  styleUrls: ['./stackoverflow-question-detail.component.scss']
})
export class StackoverflowQuestionDetailComponent implements OnInit {
  caretUpIcon = faCaretUp;
  caretDownIcon = faCaretDown;
  bookmarkIcon = faBookmark;
  activityIcon = faRedo
  checkIcon = faCheck

  comments
  answers
  postDetails

  questionId
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private stakoverflowService: StackoverflowService
  ) {
    this.route.params.subscribe((res) => {
      if (res.id) {
        this.questionId = res.id;
      }
    });
  }

  ngOnInit(): void {


    this.getPostDetails(this.questionId)
    this.getPostComments(this.questionId)
    this.getPostsAnswers(this.questionId)
  }

  getPostDetails(postId) {
    this.stakoverflowService.getQuestionsDetailsById(postId).subscribe(res => {
      console.log('post details', res)
      this.postDetails = res['items'][0]
    })
  }

  getPostsAnswers(postId) {
    this.stakoverflowService.getPostAnswersById(postId).subscribe(res => {
      console.log('answers details', res)
      this.answers = res['items']

    })
  }

  getPostComments(postId) {
    this.stakoverflowService.getPostCommentsById(postId).subscribe(res => {
      console.log('comments details', res)
      this.comments = res['items']
    })
  }

}
