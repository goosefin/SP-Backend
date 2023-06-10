const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

//Create New Review
router.post('/', ctrls.reviews.create)

//Delete Review
router.delete('/:id', ctrls.reviews.destroy)

module.exports = router