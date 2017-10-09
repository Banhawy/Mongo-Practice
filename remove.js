/*This lesson involves removing a document with the given _id.

The database name will be accessible via process.argv[2].

The collection name will be passed as the second argument to your script.

The _id will be passed as the third argument to your script. */
var mongo = require('mongodb').MongoClient;
var database = process.argv[2];
var collectionName = process.argv[3];
var id = process.argv[4];

mongo.connect('mongodb://localhost:27017/'+database, function(err, db){
    if (err) throw err;
    var collection = db.collection(collectionName);
    collection.remove({ '_id': id }, function(err){if(err) throw err;})
    db.close();
})