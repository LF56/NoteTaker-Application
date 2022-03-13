const router = require('express').Router();
var {notes} = require('../../db/db.json');
const {nanoid} = require('nanoid');

router.get('/notes', (req, res) => {
    for (let i =0; i< notes.length; i++){
      notes[i].id = nanoid();
  }
    res.json(notes)
})
router.post('/notes', (req,res) => {
    notes.push(req.body)
    res.json(notes)
})
router.delete('/notes/:id', (req,res) => {
    notes = notes.filter(note => note.id != req.params.id )
    
    res.json(notes)
})
module.exports = router;