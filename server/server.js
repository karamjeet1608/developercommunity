const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');


const users = require('./routes/api/users');
const posts = require('./routes/api/posts');
const profile = require('./routes/api/profile');


const app = express();
const db = require('./config/keys').mongoURI;

app.use(bodyParser.urlencoded({extended: false }));
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());

// Passport Config
require('./config/passport')(passport);

mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.get('/', (req,res)=> res.send('connected to app'))

app.use('/api/users', users);
app.use('/api/posts', posts);
app.use('/api/profile', profile);



const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server running on port ${port}`));