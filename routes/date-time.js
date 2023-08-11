var express = require('express');
const router = express.Router();

router.get('/',async (req,res)=>{
    res.render('date-time');
});


module.exports = router