var express = require('express'),
	router = express.Router(),
	User = require('../schema/user');

router.put('/', function(req, res, next) {
	User.find({
		email: req.body.email,
		password: req.body.password
	}, function (error, users) {
		if (users.length) {
			res.status(204);
			res.send();
		} else {
			res.status(401);
			res.send('User doesn\'t exist');
		}
	});
});

router.post('/', function(req, res, next) {
	User.find({
		email: req.body.email
	}, function (error, users) {
		if (users.length) {
			res.status(400);
			res.send('User exist');
		} else {
			(new User({
				email: req.body.email,
				password: req.body.password
			})).save(function (error, user) {
				/*
					@TODO
					set cookie
				*/
				res.status(204);
				res.send();
			});
		}
	})
});

module.exports = router;
