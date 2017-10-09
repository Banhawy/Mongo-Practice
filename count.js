var mongo = require('mongodb').MongoClient;
var age = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if(err) throw err;
    var parrots = db.collection('parrots');
    parrots.count({
        age: {$gt: +age}
    }, function(err, data){
        if (err) throw err;
        console.log(data);
    });
    db.close();
})