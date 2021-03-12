require('reflect-metadata');
const express = require('express');
const router = require('./src/router');
const connection = require('./src/database/Connect');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
connection();

app.use(router)

app.listen(3000, () => {
    console.log("Api running in http://localhost:3000/")
})