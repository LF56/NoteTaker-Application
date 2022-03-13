const router = require('express').Router();
const db = require('./dbroutes');

router.use(db)


module.exports = router;



