const express = require('express')
const router = express.Router()
const { v4: uuidv4 } = require("uuid");

router.get('/', (req,res) => {
    res.render('home');
})  

router.get('/room', (req,res) => {
    res.redirect(`/${uuidv4()}`);
})

router.get("/:room", (req, res) => {
    res.render("room", { roomId: req.params.room });
});

module.exports = router;