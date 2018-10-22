const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost/gcc', function(err, db){
  db.collections('employees').find().toArray(function(err, docs){
    console.log('Result of find:', docs);
    db.close();
  });
});
