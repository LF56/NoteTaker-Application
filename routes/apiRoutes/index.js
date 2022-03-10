const router = require('express').Router();
const fs = require('fs')
const path = require('path')  


router.get('/notes', (req, res) => {
      
    fs.readFile('db/db.json','utf8', function(err,data){
        if (!err) {
           throw (err)
        } else {
            console.log(data);
            res.json(data)
        }
    });
    })
module.exports = router;