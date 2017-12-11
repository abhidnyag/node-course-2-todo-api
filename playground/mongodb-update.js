//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if(err){
     return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');


  /* db.collection('Todos').findOneAndUpdate({
      _id: new ObjectID('5a2e7582c95477a19de08dc3')
  }, {
      $set: {
          completed: true
      }
  },{
      returnOriginal: false
  }).then((result) => {
      console.log((result)); 
  })  */

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a2e5d2ace99ec1bb82030d4')
}, {
    $set: {
        name: 'Krunal',
    },
    $inc: {
       age: 2
    }
},{
    returnOriginal: false
}).then((result) => {
    console.log((result)); 
}) 


  //db.close();
});