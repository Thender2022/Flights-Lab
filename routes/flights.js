var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights')

// Get users listing
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.get('/:id', flightsCtrl.getOne);
router.post('/', flightsCtrl.create);
router.post('/:id/destinations')


module.exports = router;
