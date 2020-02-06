const db = require('./index.js')
const data = require('./testData.js')

let insertTestData = function() {
    db.House.insertMany(data, (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log("data was inserted")
        }
    });
}

db.House.find({}, (err, result) => {
    console.log('the database entry length is ' + result.length)
    if (err) {
        console.log(err);
    } else if (result.length < 100){
        insertTestData()
    }
});