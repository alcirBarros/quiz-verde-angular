import { Injectable } from '@angular/core';
import { PerguntaQuiz } from '../shared/pergunta-quiz/pergunta-quiz.model';

@Injectable({
  providedIn: 'root'
})
export class BackEndService {

  constructor() { }

  public perguntaQuaizArray(): Array<PerguntaQuiz> {
    let array: Array<PerguntaQuiz> = new Array;

    {
      let perguntaQuiz = new PerguntaQuiz();
      perguntaQuiz.id = 1;
      perguntaQuiz.description = "TEXTO";
      perguntaQuiz.name = "Texto";
      array.push(perguntaQuiz);
    }

    {
      let perguntaQuiz = new PerguntaQuiz();
      perguntaQuiz.id = 1;
      perguntaQuiz.description = "TEXTO";
      perguntaQuiz.name = "Texto";
      array.push(perguntaQuiz);
    }
    {
      let perguntaQuiz = new PerguntaQuiz();
      perguntaQuiz.id = 1;
      perguntaQuiz.description = "TEXTO";
      perguntaQuiz.name = "Texto";
      array.push(perguntaQuiz);
    }
    {
      let perguntaQuiz = new PerguntaQuiz();
      perguntaQuiz.id = 1;
      perguntaQuiz.description = "TEXTO";
      perguntaQuiz.name = "Texto";
      array.push(perguntaQuiz);
    }

    return array;
  }
}
