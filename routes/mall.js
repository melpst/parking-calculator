const {Router} = require('express')

const router = Router()

router.get('/', (req,res) => res.send('hello, world'))

router.get('/:id/checkprice', (req, res) => {
	let fee = 0
	res.send('Total fee = '+fee)
})

router.post('/:id/checkin', (req, res) => {
	res.send('Check-in completed')
})

router.post('/:id/checkout', (req, res) => {
	res.send('Check-out completed')
})

module.exports = router