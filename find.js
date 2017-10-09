/*So, the url would be something like: mongodb://localhost:27017/learnyoumongo

Use the parrots collection to find all documents where age
is greater than the first argument passed to your script.

Using console.log, print the documents to stdout. */
var mongo = require('mongodb').MongoClient;
// Minimum age passed as second argument
var cond = process.argv[2];
mongo.connect('mongodb://localhost:27017/learnyoumongo', function (err, db){
    if (err) throw err;
    var parrots = db.collection('parrots')
     parrots.find({
        age: {$gt: +process.argv[2]}
    }).toArray(function (err, documents){
        if (err) throw err;
        console.log(documents);
    })
    db.close();
})

