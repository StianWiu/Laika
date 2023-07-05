const router = require('express').Router()
const controllers = require('../controllers/commands.js')

router.get('/', controllers.allProducts)
router.get('/:id', controllers.getProduct)
router.post('/', controllers.createProduct)

module.exports = router;
