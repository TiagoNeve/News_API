const express = require('express');
const router = require('./src/router');
const connection = require('./src/database/Connect');
const app = express();

connection.default()
app.use(router)

app.listen(3000, () => {
    console.log("Api running in http://localhost:3000/")
})