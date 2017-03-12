const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
	parkingTime: Date,
	mallId: Number
})

module.exports = mongoose.model('Parking', schema)