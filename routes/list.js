var express = require('express'),
	router = express.Router(),
	List = require('../schema/list'),
	User = require('../schema/user');

router.get('/', function(req, res, next) {
	var search = {},
		query = req.query;

	if (!isNaN(parseFloat(query.coast, 10))) {
		search.coast = parseFloat(query.coast, 10);
	}

	if (query.category) {
		search.category = query.category;
	}

	List.find(search, function (error, items) {
		res.json(items);
	});
});

router.post('/', function(req, res, next) {
	if (!req.cookies.user) {
		res.status(401);
		res.send('Not authorized');
	}

	User.findOne({
		hash: req.cookies.user
	}, function (error, user) {
		(new List({
			category: req.body.category,
			coast: req.body.coast,
			user: user.email
		})).save(function (error, item) {
			res.status(200);
			res.json(item);
		});
	});
});

module.exports = router;
