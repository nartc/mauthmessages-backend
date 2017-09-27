const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

const config = require('./config/database');

//Database connection
mongoose.Promise = global.Promise;
mongoose.connect(config.database, {
    useMongoClient: true
});

//On Database Connection
mongoose.connection.on('connected', () => {
    console.log('Connected to database: ' +config.database);
});

//On Database Error Connection
mongoose.connection.on('error', (err) => {
    console.log('Database connection error: ' +err);
});

//Initialize Express App Variable
const app = express();

const users = require('./routes/users');
const messages = require('./routes/messages');

//Port Number
const port = process.env.PORT || 3000;

//CORS Middleware
app.use(cors());
app.options('*', cors());

//Set Static Folder
app.use(express.static(path.join(__dirname, 'build')));

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '10mb',
    parameterLimit: 10000
}));

//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

//Routes
app.use('/users', users);
app.use('/messages', messages);

//Index Route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

//All routes
app.all('/*', (req, res,next) => {
    res.sendFile('build/index.html', {root: __dirname});
});

//Start Server
app.listen(port, () => {
    console.log('Server starting...');
    console.log('Server started on port: ' +port);
});