import {QuestionType} from "../enums/question-type";

export interface Question {
    id: number;
    description: string;
    type: QuestionType;
    survey: number;
}
