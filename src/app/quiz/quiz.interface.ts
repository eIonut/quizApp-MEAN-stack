export interface Quiz {
  questions: [
    {
      question: string,
      correctAnswer: number,
      answers: Array<string>
    }
  ],
}
