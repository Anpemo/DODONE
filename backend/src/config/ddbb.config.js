const { connect } = require('mongoose');
const debug = require('debug')('app:ddbb');

connect(
  'mongodb+srv://admin:admin@cluster0.6f29v.mongodb.net/todoDB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
).then(
  () => debug('Database connection stablished'),
  (error) => debug('Database connection error', error)
);
