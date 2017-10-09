/*Connect to MongoDB on port 27017.
You should connect to the database named learnyoumongo and insert
a document into the docs collection.

The document should be a json document with the following properties:

  * `firstName`
  * `lastName`

firstName will be passed as the first argument to the lesson.

lastName will be passed as the second argument to the lesson.

Use console.log to print out the object used to create the document.

Make sure you use JSON.stringify convert it to JSON. */
var mongo = require('mongodb').MongoClient;
var firstName = process.argv[2];
var lastName = process.argv[3];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if (err) throw err;
    var docs = db.collection('docs');
    var data = {'firstName': firstName,
        'lastName': lastName
    }
    docs.insert(data, function (err, docs){
        if (err) throw err;
        console.log(JSON.stringify(data));
    })
    db.close();
})