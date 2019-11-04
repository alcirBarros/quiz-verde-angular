export class PerguntaQuiz {


    public id?: number;
    public name?: string;
    public description?: string;

    constructor() {
    }

    static fromJson(jsonData: any): PerguntaQuiz {
        return Object.assign(new PerguntaQuiz(), jsonData);
    }

}