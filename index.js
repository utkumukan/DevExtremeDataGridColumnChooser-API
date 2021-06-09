const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const columnRouter = require('./routes/column-router')

const app = express()
const apiPort = 3010

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', columnRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))