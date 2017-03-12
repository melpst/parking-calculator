const {Router} = require('express')
const {Mall, Parking} = require('../models')

const router = Router()

router.get('/', (req,res) => {
	Mall.find()
	.then((data) => res.send(data))
})

router.get('/:id/checkprice', (req, res) => {
	let fee = 0
	res.send('Total fee = '+fee)
})

router.post('/:id/checkin', (req, res) => {
	res.send('Check-in completed')
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
	res.send('Check-out completed')
})

module.exports = router