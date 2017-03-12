const {Router} = require('express')

const router = Router()

router.get('/', (req,res) => res.send('hello, world'))

router.get('/:id/checkprice', (req, res) => {
	let fee = 0
	res.send('Total fee = '+fee)
})

router.get('/:id/price', (req, res) => {
	res.send('list of mall\'s price')
})

router.post('/:id/checkin', (req, res) => {
	res.send('Check-in completed')
})

router.post('/:id/checkout', (req, res) => {
	res.send('Check-out completed')
})

router.post('/:id/price', (req, res) => {
	res.send(req.body)
})

module.exports = router