const {addRenda, getRenda, deleteRenda} = require('../controllers/renda')
const router = require('express').Router()



router.post('/add-renda', addRenda)
      .get('/get-renda', getRenda)
      .delete('/delete-renda/:id', deleteRenda)
module.exports = router
