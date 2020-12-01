// https://www.youtube.com/watch?v=tLPYc3hJ2Cw&list=LL&index=14
//  start at 1:12:29

const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

/**
 * 
 * @param {Knex} knex 
 */


function addDefaultColumns(table) {
  table.timestamps(false, true);
  table.datetime('deleted_at');
}

function references(table, foreignTableName) {
  table
    .integer(`${foreignTableName}_id`)
    .unsigned()
    .references('id')
    .inTable(foreignTableName)
    .onDelete('cascade');
}


// ----------------------------------------------------------

exports.up = async (knex) => {
  await knex.schema.createTable(tableNames.user, (table) => {
    table.increments().notNullable();
    table.string('email', 254).notNullable().unique();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('password', 127).notNullable();
    table.datetime('last_login');
    addDefaultColumns(table)
  });
  await knex.schema.createTable(tableNames.country, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    addDefaultColumns(table)
  });
  await knex.schema.createTable(tableNames.specie, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.string('description', 1000);
    addDefaultColumns(table)
  });
  await knex.schema.createTable(tableNames.address, (table) => {
    table.increments().notNullable();
    table.string('street_address_1', 50).notNullable();
    table.string('street_address_2', 50);
    table.string('city', 50).notNullable();
    table.string('state', 50).notNullable();
    table.string('zip_code', 15).notNullable();
    table.float('latitude', 50).notNullable();
    table.float('longitude', 50).notNullable();
    references(table, tableNames.country)
  })
  await knex.schema.createTable(tableNames.supplier, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.string('email', 254).notNullable().unique();
    table.string('website_url', 2000).unique();
    table.string('description', 1000);
    references(table, tableNames.address)
  });
  await knex.schema.createTable(tableNames.skid, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable();
    table.integer('rank_lot_number').notNullable();
    table.string('country_of_origin', 50).notNullable();
    table.integer('some_number').notNullable();
    table.date('arrival_date').notNullable();
    table.integer('rank_qc_report').notNullable();
    table.boolean('complete').notNullable();
    references(table, tableNames.supplier);
  });
};



exports.down = async (knex) => {
  await Promise.all([
    tableNames.skid,
    tableNames.supplier,
    tableNames.address,
    tableNames.user,
    tableNames.country,
    tableNames.specie
  ].map((tableName) => knex.schema.dropTable(tableName)));
};
