const express = require('express')
const router = express.Router();
const dados = require('../models/UC')



router.get('/dados', async (req, res) => {
    const ucs =  await dados.find()
    res.send(ucs)
})

router.post('/dados', async (req, res) => {
    
    res.send('ok')
    
})



module.exports = router;