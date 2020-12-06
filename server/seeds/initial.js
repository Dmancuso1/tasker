
const bcrypt = require('bcrypt');
const Knex = require('knex');

const tableNames = require('../src/constants/tableNames');
const orderedTableNames = require('../src/constants/orderedTableNames');

/**
 * @param {Knex} knex 
 */


 // run: npm run seed or yarn run seed

exports.seed = async (knex) => {

   // Deletes ALL existing entries
  await orderedTableNames
    .reduce(async (promise, table_name) => { 
      await promise;
      console.log('Clearing', table_name)
      return knex(table_name).del();
    }, Promise.resolve());

    //creating a user object for seeding. seed ID for development
    const user = {
      first_name: "Dane", 
      last_name: "Mancuso",
      email: "danegmancuso@gmail.com",
      password: await bcrypt.hash("Hehehehe", 12),
      last_login: null
    }

    // seed USER table
    const [createdUser] = await knex(tableNames.user)
    .insert(user)
    .returning('*');

    console.log('User Created', {
      createdUser,
    })

    // seed COUNTRY table
    await knex(tableNames.country)
    .insert([{
      
    }]);
     

};
