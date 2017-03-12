const mongoose = require('mongoose')

const Schema = mongoose.Schema

const schema = new Schema({
	id: Number,
	mallName: String,
	price: Object
})

module.exports = mongoose.model('Mall', schema)