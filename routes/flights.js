var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get users listing

router.get('/new', flightsCtrl.new)
router.post('/', flightsCtrl.create)


module.exports = router;
