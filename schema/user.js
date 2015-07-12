var mongoose = require('mongoose'),
	schema;

schema = mongoose.Schema({
    email: String,
    password: String
});

schema.methods.speak = function () {
	console.log('My email is ' + this.email);
};

module.exports = mongoose.model('User', schema);