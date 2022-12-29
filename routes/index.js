const express = require('express');
const router = express.Router();
const {home} = require("../controller/indexController")

/* GET home page. */
router.get('/',home);


module.exports = router;
