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
	Parking.findOne({mallId: req.params.id})
	.then((data) => {
		if(data === (undefined || null)){
			res.send('Parking lot hasn\'t been occupied yet')
		}
		else{
			const entryTime = data.entryTime
			const currentTime = new Date()
			console.log('entry time : ' + entryTime)
			console.log('current time : ' + currentTime)
	
			const duration = (currentTime.getTime() - entryTime.getTime())/(1000*60)
			console.log('duration : ' + duration)
	
			Mall.findOne({id: req.params.id})
			.then((data) => {
				for (let key in data.fee) {
					if(key >= duration){
						res.send('Total fee = '+data.fee[key])
					}
				}
				res.send('Total fee is exceed limit. Please contact our manager.')			
			})
		}
	})
})

router.post('/:id/checkin', (req, res) => {
	Parking.findOne({mallId: req.params.id})
	.then((data) =>{
		if(data === (undefined || null)){
			const parking = new Parking()
			parking.mallId = req.params.id
			parking.entryTime = req.body.entryTime
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
		if(data === (undefined || null)){
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
		if(data === (undefined || null)){
			res.send('Parking lot hasn\'t been occupied yet')
		}
		else{
			Parking.remove({mallId: req.params.id})
			.then((data) => res.send('Check-out completed'))
		}
	})
	
})

module.exports = router