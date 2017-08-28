var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mern'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mern-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mern'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mern-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mern'
    },
    port: process.env.PORT || 3000,
    db: 'mongodb://localhost/mern-production'
  }
};

module.exports = config[env];
