var express = require('express'),
	router = express.Router(),
	User = require('../schema/user');

router.put('/', function(req, res, next) {
	User.findOne({
			email: req.body.email
	}, function (error, user) {
		if (user && user.authenticate(req.body.password)) {
			res.cookie('user', user.hash, {maxAge: 1000 * 60 * 60 * 24 * 365});
			res.status(204);
			res.send();
		} else {
			res.status(401);
			res.send('User doesn\'t exist');
		}
	});
});

router.get('/:hash', function(req, res, next) {
	User.findOne({
			hash: req.params.hash
	}, function (error, user) {
		if (user) {
			res.json(user.details());
		} else {
			res.status(401);
			res.send('User doesn\'t exist');
		}
	});
});

router.post('/', function(req, res, next) {
	User.findOne({
		email: req.body.email
	}, function (error, user) {
		if (user) {
			res.status(400);
			res.send('User exist');
		} else {
			(new User({
				email: req.body.email,
				password: req.body.password
			})).save(function (error, user) {
				res.cookie('user', user.hash);
				res.status(204);
				res.send();
			});
		}
	})
});

module.exports = router;
