import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../core/back-end.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public perguntaQuaizArray:Array<Object>;

  constructor(public backEndService: BackEndService) { 
    
  }

  ngOnInit() {
    this.perguntaQuaizArray = this.backEndService.perguntaQuaizArray();
  }

}
