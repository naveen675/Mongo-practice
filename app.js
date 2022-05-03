const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const Blog = require('./db/models/blog');
dotenv.config();

const password = process.env.Password;
const port = process.env.PORT || 3001;
const fetch = require("node-fetch");

app.use(express.json());


const url = `mongodb+srv://devprofile:${password}@cluster0.8yytl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log('Connected to the database ')
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. n${err}`);
    })


const blog = new Blog({
    name : 'naveen',
    age : 20
});

blog.save()
.then((saved))

