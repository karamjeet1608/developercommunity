const express = require('express');
const router = express.Router();

// @route GET api/profile/test
// @desc Tests users route
// @access public 
router.get('/test', (req,res)=> res.json({msg:"profile connected"}))

module.exports = router;