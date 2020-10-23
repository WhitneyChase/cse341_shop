const express = require('express');
const router = express.Router();

const TeamActivities = require('../controllers/ta05');
// const style; 
// const counter;

router.get('/', TeamActivities.getTeam05);
router.post('/create-cookie', TeamActivities.postCreateCookie);
router.post('/changeStyle', TeamActivities.postTeam05ChangeStyle);
router.post('/counterIncrement', TeamActivities.postTeam05CounterIncrement);
// router.post('/counterDecrement', TeamActivities.postTeam05CounterDecrement);
router.post('/destroy', TeamActivities.postTeam05Destroy);
module.exports = router;