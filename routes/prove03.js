const express = require('express');

const proveAssignments = require('../controllers/prove03');
const router = express.Router();

router.get('/', proveAssignments.getProve03);


router.post('/submit', proveAssignments.postProve03);

module.exports = router;