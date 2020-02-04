const express = require('express')
const app = express()
const port = 2000
const path = require('path')

var cors = require('cors')

app.use(cors())

const db = require('../database/index.js')

app.use(express.static(path.join(__dirname, '../client/dist/')))

app.get('/house', (req, res) => {
    db.House.find({}, (err, data) => { 
        if (err) {
            req.sendStatus(404)
        } else {
            const randomHouse = Math.floor(Math.random() * 100)
            res.status(200).send(data[randomHouse])
        }
    })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))