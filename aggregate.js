/*Say you have a collection named prices. Each price document is modeled
like so:

    {
      "name": "Tshirt",
      "size": "S",
      "price": 10,
      "quantity": 12
      "meta": {
        "vendor": "hanes",
        "location": "US"
      }
    }

In this exercise, we need to calculate the average price for all documents
in the prices collection in the database named learnyoumongo that have
the size that will be passed as the first argument to your script.

Use console.log() to print the average price rounded to 2 decimal places
to stdout after you have found it. */

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
