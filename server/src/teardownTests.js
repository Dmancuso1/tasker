const db = require('./db');

// routes to globalTeardown:  in jest.config file

// immideatly invoked async funciton that should destroy the database and after the jest test suites run.

module.exports = async () => {
  await db.destroy(); 
};   
