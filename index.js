const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("Api running in http://localhost:3000/")
})