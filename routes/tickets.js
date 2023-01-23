const express = require ('express');
const router = express.Router();
const flightsCtrl = require('../controllers/tickets');

router.post('/fligts/:id/tickets', ticketsCtrl.create);

module.exports = router;