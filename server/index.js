console.log('\x1Bc');

import path from 'path';
import express from 'express';
import webpackHotMiddleware from 'webpack-hot-middleware';
const config = require('../webpack.config.dev.js');

import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import session from 'express-session';
import logger from 'morgan';
import passport from 'passport';
import cors from 'cors';
import chalk from 'chalk';

// Import all routes
import routes from './routes';

// Initialize db
import db from './db';

// Initialize models
import models from './models/index';
models();

// const isDeveloping = process.env.NODE_ENV !== 'production';
// const port = isDeveloping ? 3000 : process.env.PORT;
const app = express();

const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.dev.js');

const compiler = webpack(webpackConfig);

// if (isDeveloping) {
// Hot reloading
app.use(
  webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    noInfo: true
  })
);

app.use(webpackHotMiddleware(compiler));

app.use(express.static('client'));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json({limit: '10mb', parameterLimit: 10000}));
app.use(bodyParser .urlencoded({ limit: '10mb', extended: true, parameterLimit: 10000}));
app.use(cookieParser());
app.use(session({
  secret: 'zikR3T',
  name: 'seekR3TSess!ion',
  proxy: true,
  resave: true,
  saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

routes(app);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
// }

app.listen(3000, () => {
  console.log(chalk.green('Running on localhost: 3000'));
});
