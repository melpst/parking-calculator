const {Router} = require('express')
const {Mall, Parking} = require('../models')

const router = Router()

router.get('/', (req,res) => {
	Mall.find()
	.then((data) => res.send(data))
})

router.get('/parking', (req,res) => {
	Parking.find()
	.then((data) => res.send(data))
})

router.get('/:id/checkprice', (req, res) => {
	let fee = 0
	res.send('Total fee = '+fee)
})

router.post('/:id/checkin', (req, res) => {
	Parking.findOne({mallId: req.params.id})
	.then((data) =>{
		if(data == undefined){
			const parking = new Parking()
			parking.mallId = req.params.id
			parking.parkingTime = req.body.entryTime
			parking.save()
			.then((data) => res.send('Check-in completed'))
		}
		else{
			res.send('Parking lot is occupied')
		}
	})
})

router.post('/price', (req, res) => {
	Mall.findOne({id: req.body.id})
	.then((data) => {
		if(data == undefined){
			const price = new Mall (req.body)
			price.save()
			.then((data) => res.send(data))
		}
		else{
			res.send('This mall has been added already')
		}
		
	})
})

router.delete('/:id/checkout', (req, res) => {
	Parking.findOne({mallId: req.params.id})
	.then((data) =>{
		if(data == undefined){
			res.send('Parking lot hasn\'t been occupied yet')
		}
		else{
			Parking.remove({mallId: req.params.id})
			.then((data) => res.send('Check-out completed'))
		}
	})
	
})

module.exports = router