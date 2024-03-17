const {addRenda} = require('../controllers/renda')
const router = require('express').Router()



router.post('/add-renda', addRenda)

module.exports = router
////////////////////////////////
// const router = require('express').Router();

// router.get('/', (req,res)=>{
//     res.send('ola mundo')
// })

// module.exports = router