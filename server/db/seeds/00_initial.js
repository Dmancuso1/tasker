
const bcrypt = require('bcrypt');
const Knex = require('knex');
const { v4: uuidv4 } = require('uuid');
// impliment with:  uuidv4()

const countries = require('../../src/constants/countries')

const tableNames = require('../../src/constants/tableNames');
const orderedTableNames = require('../../src/constants/orderedTableNames');

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

  //creating a user object for seeding. ID is auto generated
  const user = {
    id: 10,
    first_name: "Dane",
    last_name: "Mancuso",
    email: "danegmancuso@gmail.com",
    password: await bcrypt.hash("Hehehehe", 12),
    last_login: null
  }

  // seed USER table  (destructuring so we can log it. not needed?)
  const [createdUser] = await knex(tableNames.user)
    .insert(user)
    .returning('*');  

  console.log('User Created', {
    createdUser,
  })

  // seed COUNTRY table (imported)
  await knex(tableNames.country)
    .insert(countries);

  // TODO: Seed remaining tables as needed.

};
