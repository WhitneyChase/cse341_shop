//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const TeamActivities = require('../controllers/ta03');


//get the the info from the add user form
router.post('/ta03', TeamActivities.postTeam03);

router.get('/', TeamActivities.getTeam03);

module.exports = router;