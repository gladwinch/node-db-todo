// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');
  //deletemany
  // db.collection('Todos').deleteMany({text: "eat lunch"}).then((result) => {
  //   console.log(result);
  // });
  //deleteone
  db.collection('Todos').deleteOne({text: "eat lunch"}).then((result) => {
    console.log(result);
  });

  // db.close();
});
