const express = require('express');

const proveAssignments = require('../controllers/prove02');
const router = express.Router();

router.get('/', proveAssignments.getProve02);


router.post('/submit', proveAssignments.postProve02);

module.exports = router;