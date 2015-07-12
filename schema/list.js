var mongoose = require('mongoose'),
	schema;

schema = mongoose.Schema({
    category: String,
    coast: Number
});

module.exports = mongoose.model('List', schema);