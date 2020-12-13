const db = require('./db');

// routes to globalSetup:  in jest.config file

// immideatly invoked async funciton that should migrate the database and seed it before the jest tests start.

module.exports = async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
};


