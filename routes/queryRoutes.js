const express = require('express');
const router = express.Router();
const queriesController = require('../controllers/queriesController');

router.post('/new_queries', queriesController.createBooking);
router.get('/get_queries', queriesController.getAllBookings);
router.get('/queries/:id', queriesController.getBookingById);
router.put('/queries/:id', queriesController.updateBooking);
router.delete('/queries/:id', queriesController.deleteBooking);

module.exports = router;




  
  