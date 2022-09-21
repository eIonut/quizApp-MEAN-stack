const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  category: {
    type: String,
    required: [true, "must provide category"],
    trim: true
  },
  topic: {
    type: String,
    required: [true, 'must provide a topic']
  },
  questions: {
    type: Array,
    question: {
      type: Object,
      question: String,
      answers: Array,
      correctAnswer: Number
    }
  }
});

module.exports = mongoose.model('Quiz', QuizSchema);
