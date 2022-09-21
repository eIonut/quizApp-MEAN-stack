const express = require('express');
const router = express.Router();

const {getAllQuizzes,
      getQuiz,
      getCategories,
      createQuiz
    } = require('../controllers/quizzes');

router.route('/').get(getAllQuizzes).post(createQuiz);
router.route('/categories').get(getCategories);
router.route('/:category').get(getQuiz);

module.exports = router;
