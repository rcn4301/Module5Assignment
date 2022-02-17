const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//middleware
app.use('/posts', () => {
    console.log('This is our security middleware running')
});

//routes
app.get('/', (req,res) => {
    res.send('We are at home');
});

app.get('/posts', (req,res) => {
    res.send('We are on posts');
});

//Connect to Database
mongoose.connect('mongosh "mongodb+srv://cluster0.gicpn.mongodb.net/myFirstDatabase" --apiVersion 1 --username rcnorth', () =>  {
    console.log ('Connected to DB');
});

//Listening Port
app.listen(8502);