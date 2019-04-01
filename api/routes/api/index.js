// ./routes/api/index

const express                = require('express');
const router                 = express.Router();
const productController      = require('../../controllers/product.js');
const manufacturerController = require('../../controllers/manufacturer.js');
// const userController         = require('../../controllers/user.js');

router.get('/manufacturers', manufacturerController.all);
router.get('/products', productController.all);
router.get('/products/:id', productController.byId);
router.post('/products', productController.create);
router.put('/products/:id', productController.update);
router.delete('/products/:id', productController.remove);
// router.post('/user/:credentials', userController.pre);
// router.get('/user', userController.all);
module.exports = router;