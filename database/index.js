const data = require('./testData.js')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

let repoSchema = mongoose.Schema({
    name: String,
    starReviewTotal: Number,
    numberOfReviews: Number,
    bookedDates: Object,
    guestsAllowed: {
        adult: Number, 
        child: Number, 
        infant: Number
    },
    priceRelatedToSumOfAdultAndChild: Object,
    Views: {
        today: Number, 
        lastWeek: Number, 
        lastMonth: Number,
    }
});

let House = mongoose.model('house', repoSchema);

let insertTestData = function() {
    House.insertMany(data, (err) => {
        if (err) {
            console.log(error)
        } else {
            console.log("data was inserted")
        }
        mongoose.connection.close()
    });
}

House.remove({}, (err, result) => {
    if (err) {
        console.log(err);
    } else {
        insertTestData()
    }
});