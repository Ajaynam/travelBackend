


const express = require('express');
const router = express.Router();
const multer = require('multer');
const usercontroller = require('../controllers/userController');
const upload = require('../middleware/productImage'); 

router.post('/new_user',  usercontroller.createUser);
// router.get('/get_product', usercontroller.getAllProducts);
// router.get('/get_product/:id', usercontroller.getProductById);
// router.put('/update_product/:id', upload.array('ProductImage'), usercontroller.updateProduct);
// router.delete('/remove_product/:id', usercontroller.deleteProduct);

module.exports = router;

