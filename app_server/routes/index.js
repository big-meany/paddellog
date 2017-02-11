var express = require('express');
var router = express.Router();
var ctrlhome = require('../controllers/home')
var ctrldata = require('../controllers/data');
var ctrlOther = require('../controllers/other');

/* home pages */
// -router.get('/', ctrlhome.homelist);
router.get('/', ctrlhome.welcome);

/* data pages */
router.get('/login', ctrldata.login);
router.get('/dataentry', ctrldata.dataentry);
router.get('/dataview', ctrldata.dataview);

/* Other pages */
router.get('/about', ctrlOther.about);

module.exports = router;
