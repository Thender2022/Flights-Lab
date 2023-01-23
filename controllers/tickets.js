const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
}

function create (req, respond) {
    Ticket.create(req.body, function (err, ticket) {
        respond.redirect('flights/new')
    })
}