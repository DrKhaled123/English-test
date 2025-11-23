export enum GradeLevel {
  G10 = 'Grade 10',
  G11 = 'Grade 11',
  G12 = 'Grade 12'
}

export enum QuestionType {
  MCQ = 'MCQ',
  FILL_IN_BLANKS = 'FILL_IN_BLANKS',
  DO_AS_SHOWN = 'DO_AS_SHOWN',
  OPEN_ENDED = 'OPEN_ENDED', // Used for Language Functions & Set Book
  WRITING = 'WRITING',
  TRANSLATION = 'TRANSLATION'
}

export interface Question {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[]; // For MCQ or word bank
  correctAnswer?: string | string[]; // String for MCQ, array for acceptable open answers
  explanation?: string;
  context?: string; // For reading passages or shared instructions
}

export interface ExamSection {
  id: string;
  title: string;
  instructions: string;
  questions: Question[];
  contextPassage?: string; // For Reading comprehension text or Vocabulary Word Bank
}

export interface Exam {
  id: string;
  title: string;
  grade: GradeLevel;
  term: string;
  year: string;
  sections: ExamSection[];
}

export interface UserAnswers {
  [questionId: string]: string;
}

export interface ExamState {
  currentGrade: GradeLevel;
  selectedExamId: string | null;
  answers: UserAnswers;
  isSubmitted: boolean;
  score: number;
}