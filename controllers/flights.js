const Flight = require('../models/flights')

module.exports = {
    new: newFlight,
    create,
};

function newFlight(req, res) {
    res.render('flights/new')
}

function create(req, res) {
    req.body.nowDeparting = !!req.body.nowDeparting;
    req.body.cast = req.body.cast.trim();
    if (req.body.dates) req.body.dates = !!req.body.dates.split(/\s*,\s*/);
    
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.redirect('/flights/new');
        console.log(flight);
        res.redirect('/flights/new')
    });
}