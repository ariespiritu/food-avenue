import mongoose from 'mongoose';
import chalk from 'chalk';

// Build the connection string
const debug = process.env.NODE_ENV !== 'production';
const dbURI = debug
  ? 'mongodb://127.0.0.1:27017/foodave-api'
  : 'mongodb://127.0.0.1:27017/foodave-api';

mongoose.Promise = global.Promise;

// Create the database connection
mongoose.connect(dbURI, (err) => {
  if(err) {
    console.log(chalk.red('Could not connect to DB'));
  } else {
    console.log(chalk.green('Database connected to:', dbURI ));
    mongoose.set('debug', debug)
  }
})

// If the node process ends
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log(chalk.red('Database connection terminated by app'));
    process.exit(0)
  })
})
