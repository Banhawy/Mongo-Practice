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

