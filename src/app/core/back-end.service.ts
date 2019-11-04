import { Injectable } from '@angular/core';
import { PerguntaQuiz } from '../shared/pergunta-quiz/pergunta-quiz.model';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor() { }

  public perguntaQuaizArray() :Array<Object>{
    var array:Array<PerguntaQuiz>;

    let perguntaQuiz = new PerguntaQuiz();

    perguntaQuiz.id= 1;
    perguntaQuiz.description="TEXTO";
    perguntaQuiz.name = "Texto";


    return array;
  }
}
