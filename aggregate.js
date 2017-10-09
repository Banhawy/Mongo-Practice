var mongo = require('mongodb').MongoClient;
var size = process.argv[2];

mongo.connect('mongodb://localhost:27017/learnyoumongo', function(err, db){
    if (err) throw err;
    var prices = db.collection('prices');
    var match = { $match: {'size': size} }
    var group = { $group: {
        _id : 'average',
        average: {
            $avg : '$price'
        }
    } }
    prices.aggregate([match, group]).toArray(function(err, data){
        if (err) throw err;
        console.log(data[0].average.toFixed(2));
    })
    db.close();
})
