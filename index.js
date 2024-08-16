require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/wp',(req, res) => {
    res.send('suman-routh')
})

app.get('/login',(req, res) => {
    res.send('<h1>Login at Suman website....</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
