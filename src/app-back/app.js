const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const quizzes = require('./routes/quizzes');
const errorHandlerMiddleware = require('./middleware/error-handler');

require('dotenv').config();

var MongoClient = require('mongodb').MongoClient;

var username = 'ionut1234';
var password = 'ionut1234';
var hosts = 'iad2-c16-0.mongo.objectrocket.com:52316,iad2-c16-2.mongo.objectrocket.com:52316,iad2-c16-1.mongo.objectrocket.com:52316';
var database = 'QUIZ-APP';
var options = '?replicaSet=6d91059048ab4f49a42ddf0ca33cc3fe';
var connectionString = 'mongodb://' + username + ':' + password + '@' + hosts + '/' + database + options;

app.use(express.static('./public'));
app.use(express.json());

app.use('/api/v1/quizzes', quizzes);
app.use(errorHandlerMiddleware);

const port =  process.env.PORT || 3000;

MongoClient.connect(connectionString, function(err, db) {
  if (db) {
    db.close();
  }
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log('Connected!');
    process.exit();
  }
});

// const start = async () => {
//     try {
//         await connectDB(process.env.MONGO_URI);
//         app.listen(port, console.log(`Server is listening on port ${port}`));
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// start();



