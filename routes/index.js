const {Router} = require('express')
const mall = require('./mall')

const router = Router()
router.use('/mall', mall)

router.get('/', (req,res) => res.send('hello, world'))

module.exports = router