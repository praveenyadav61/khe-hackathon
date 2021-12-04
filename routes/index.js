const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid");

router.get('/', (req,res) => {
    res.render('index');
})  

router.get('/room/:id', (req,res) => {
    res.render("room", { roomId: req.params.id });
})

module.exports = router;