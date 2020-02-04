const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/checkout');

let repoSchema = mongoose.Schema({
    _id: Number,
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
    views: {
        today: Number, 
        lastWeek: Number, 
        lastMonth: Number,
    }
});

let House = mongoose.model('house', repoSchema);

module.exports.House = House