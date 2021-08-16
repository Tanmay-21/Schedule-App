const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cors = require('cors');
const cookieSession = require('cookie-session');
const cookieParser = require('cookie-parser');

const tableRoutes = require('./routes/table-routes');
const userRoutes = require('./routes/user-routes');
const HttpError = require('./models/http-error');
const keys = require('./config/keys');

const server = express();

server.use(express.json());
server.use(cookieParser());

server.use(cors({
  // origin: 'http://localhost:3000',
  origin: function(origin, callback){
    return callback(null, true);
  },
  methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD'],
  credentials: true
}));

require('./services/passport');

server.use(
  cookieSession({
    maxAge: 30*24*60*60*1000,
    keys: [ keys.cookieKey ]
  })
);

server.use(passport.initialize());
server.use(passport.session());

server.use('/api/table', tableRoutes);
server.use('/api/user', userRoutes);

server.use((req, res, next) => {
  const error = new HttpError('Route does not exist!', 404);
  return next(error);
});

server.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({message: error.message || 'An unknown error occured!'});
});

const PORT = process.env.PORT || 5000;
const connectionUrl = keys.mongoURI;

mongoose
  .connect(connectionUrl, { 
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
  })
  .then(() => {
    console.log("database connected!");
  })
  .catch(error => {
    console.log(error);
  });

server.listen(PORT, () => {
  console.log("Running in :" + process.env.NODE_ENV);
});
