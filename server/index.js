const express = require('express')
const app = express()
const port = 3000
const path = require('path')

const db = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../client/dist/')))

app.get('/houses', (req, res) => {
    db.House.find({}, (err, data) => { 
        if (err) {
            req.sendStatus(404)
        } else {
            res.status(200).send(data)
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))