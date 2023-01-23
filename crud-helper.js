require('dotenv').config();
require('./config/database')

const Flight = require('./models/flight');
const Ticket = require('./models/performer');

let flight, flights;
let ticket, tickets;