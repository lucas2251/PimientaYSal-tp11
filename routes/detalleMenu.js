const express = require('express');
const router = express.Router();
let {menu} = require('../controller/detalleMenuController')
/* GET menu listing. */
router.get('/:id', menu);

module.exports = router;