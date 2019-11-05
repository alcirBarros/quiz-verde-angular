import { Component, OnInit } from '@angular/core';
import { BackEndService } from '../core/back-end.service';
import { UiElement } from '../radio-button/ui-element.model';
import { PerguntaQuiz } from '../shared/pergunta-quiz/pergunta-quiz.model';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  public perguntaQuaizUiElementArray:Array<UiElement> = new Array;

  constructor(public backEndService: BackEndService) { 
    
  }

  ngOnInit() {
    let perguntaQuaizArray:Array<PerguntaQuiz> = this.backEndService.perguntaQuaizArray();
    for(let perguntaQuaiz of perguntaQuaizArray){
      let uiElement:UiElement = new UiElement(perguntaQuaiz, perguntaQuaiz.description);
      this.perguntaQuaizUiElementArray.push(uiElement);
    }
    console.log(this.perguntaQuaizUiElementArray);
  }

}
