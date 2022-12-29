const express = require('express');
const router = express.Router();
const {home,menu} = require("../controller/indexController")

/* GET home page. */
router.get('/',home);
router.get("/menu",menu);

module.exports = router;
