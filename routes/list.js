var express = require('express'),
	router = express.Router(),
	List = require('../schema/list');

router.get('/', function(req, res, next) {
	List.find(function (error, items) {
		res.json(items);
	});
});

router.post('/', function(req, res, next) {
	/*
		@TODO
		add date
		add owner
	*/
	(new List({
		category: req.body.category,
		coast: req.body.coast
	})).save(function (error, item) {
		res.status(200);
		res.json(item);
	});
});

module.exports = router;
