const express = require('express');

const TeamActivities = require('../controllers/ta02');
const router = express.Router();

console.log("HEY HEY");
//get the the info from the add user form
router.post('/addUser', TeamActivities.postTeam02AddUser);
console.log("AFTER!");

//get the the info from the remove user form
router.post('/removeUser', TeamActivities.postTeam02RemoveUser);


router.get('/', TeamActivities.getTeam02);

module.exports = router;