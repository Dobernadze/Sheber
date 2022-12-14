const express = require('express')
const path = require('path')
const app = express()
const PORT = 3000
const mongoose = require('mongoose')

const db = 'mongodb+srv://qwerty:Frunze127@cluster0.v5n9urc.mongodb.net/?retryWrites=true&w=majority'

mongoose
    .connect(db)
    .then((res)=> console.log('Connected to DB'))
    .catch((err)=> console.log(error))

const createPath = (page) =>path.resolve(__dirname, 'ejs-views', `${page}.ejs`)

app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening on port ${PORT}`);
})

app.get('/', (req, res) => {
    res.render(createPath('index'))
})

app.get('/contacts', (req, res) => {
    res.render(createPath('contacts'))
})

app.get('/about-us', (req, res) => {
    res.render(createPath('about'))
})

app.get('/id', (req, res) => {
    res.render(createPath('personal_account'))
})

app.get('/registration', (req, res) => {
    res.render(createPath('form'))
 })



app.use( (req, res) => {
    res
    .status(404)
    .render(createPath('error'))
})

