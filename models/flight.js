const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const flightSchema = new Schema({
    airport: {
        type: String,
        enum: ['DEN', 'AUS', 'DFW', 'LAX', 'SAN'],
        default: 'DEN'
    },
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United'],
        required: true,
    },
    flightNo: {
        type: Number,
        minlength: 10,
        maxlength: 9999,
    },
    departs: {
        type: Date,
        required: true,
        default: function () {
            return new Date().getFullYear();
        }  
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Flight", flightSchema)