const Quiz = require('../models/quiz');
const {createCustomError} = require('../errors/custom-error');

const getAllQuizzes = async (req, res) => {
  const quiz = await Quiz.find({});
  res.status(200).json({status: "success", data: {quiz}});
}

const createQuiz = async (req, res) => {
  const quiz = await Quiz.create(req.body);
  res.status(201).json({quiz});
// res.json(req.body)
}

const getCategories = async (req, res) => {
  const quiz = await Quiz.distinct("category");
  res.status(200).json(quiz);
}

const getQuiz = async(req, res, next) => {
  const categories = req.params.category;
  // const quiz = await Quiz.findOne({category: categories}, {topic: 1, questions: 1, _id: 1});
  const quiz = await Quiz.aggregate([
    {
      $match: {
        category: categories
      }
    },
    {
      $sample: {size: 1}
    },
    { $project : { topic : 1 , questions : 1, _id: 0}}
  ])

  if(!quiz.length){
    return next(createCustomError(`no category ${categories}`, 404));
  }

res.status(200).json({quiz});

}

module.exports = {
  getAllQuizzes,
  createQuiz,
  getQuiz,
  getCategories
}
