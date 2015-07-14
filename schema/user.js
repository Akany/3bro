var mongoose = require('mongoose'),
	crypto = require('crypto'),
	schema;

schema = mongoose.Schema({
    email: { type: String, default: ''},
    hash: { type: String, default: ''},
    salt: { type: String, default: ''}
});

schema.methods = {
	makeSalt: function () {
		return Math.round((new Date().valueOf() * Math.random())) + '';
	},

	encryptPassword: function (password) {
		return crypto
			.createHmac('sha1', this.salt)
			.update(password)
			.digest('hex');
	},

	authenticate: function (plainText) {
		return this.encryptPassword(plainText) === this.hash;
	},

	details: function () {
		return {
			email: this.email
		};
	}
};

schema
	.virtual('password')
	.set(function (password) {
		this._password = password;
		this.salt = this.makeSalt();
		this.hash =  this.encryptPassword(password);
	})
	.get(function () {
		return this._password
	});

module.exports = mongoose.model('User', schema);