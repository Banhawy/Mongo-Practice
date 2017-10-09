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