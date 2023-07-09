const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

// All spotussys
router.get('/', ctrls.spotussys.index);

//Update spotussy
router.put('/:id', ctrls.spotussys.update)

//New Spotussy
router.post('/', ctrls.spotussys.create)

//Delete Spotussy
router.delete('/:id', ctrls.spotussys.destroy)

module.exports = router