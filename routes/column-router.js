const express = require('express')

const columnController = require('../controllers/column-controller')

const router = express.Router()

router.post('/column', columnController.createColumn)
router.put('/column/:userId/:tableId', columnController.updateColumn)
router.get('/column/:userId/:tableId', columnController.getColumnById)

module.exports = router