const { addDespesa, getDespesa, deleteDespesa } = require('../controllers/despesa')
const {addRenda, getRenda, deleteRenda} = require('../controllers/renda')
const router = require('express').Router()



router.post('/add-renda', addRenda)
      .get('/get-renda', getRenda)
      .delete('/delete-renda/:id', deleteRenda)
      .post('/add-despesa', addDespesa)
      .get('/get-despesa', getDespesa)
      .delete('/delete-despesa/:id', deleteDespesa)
module.exports = router
