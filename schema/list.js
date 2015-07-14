var mongoose = require('mongoose'),
	schema;

schema = mongoose.Schema({
    category: String,
    coast: Number,
    user: String,
    date: Date
});

schema.pre('save', function (next) {
	this.date = new Date;
	next();
});

module.exports = mongoose.model('List', schema);