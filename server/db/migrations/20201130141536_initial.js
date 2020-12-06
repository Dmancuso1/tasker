// https://www.youtube.com/watch?v=tLPYc3hJ2Cw&list=LL&index=14
//  start at 1:12:29

const Knex = require('knex');
const tableNames = require('../../src/constants/tableNames');

/**
 * @param {Knex} knex 
 */


function addDefaultColumns(table) {
  table.timestamps(false, true); // creates: created@ and updated@ fields.
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
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.country, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.specie, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.string('description', 1000);
    addDefaultColumns(table);
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
    references(table, tableNames.country);
    addDefaultColumns(table);
  })
  await knex.schema.createTable(tableNames.supplier, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.string('email', 254).notNullable().unique();
    table.string('website_url', 2000).unique();
    table.string('description', 1000);
    references(table, tableNames.address);
    addDefaultColumns(table);
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
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.customer, (table) => {
    table.increments().notNullable();
    table.string('name').notNullable().unique();
    table.string('email', 254).notNullable().unique();
    table.string('website_url', 2000).unique();
    table.string('description', 1000);
    references(table, tableNames.address);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.order, (table) => {
    table.increments().notNullable();
    table.integer('order_number').notNullable();
    table.string('description', 1000);
    table.integer('total_price').notNullable();
    table.date('pickup_date').notNullable();
    references(table, tableNames.user);
    references(table, tableNames.customer);
    addDefaultColumns(table);
  });
  await knex.schema.createTable(tableNames.box, (table) => {
    table.increments().notNullable();
    table.integer('box_number').notNullable();
    table.string('size', 50).notNullable();
    table.integer('weight').notNullable(); 
    table.integer('price'); 
    table.date('ship_date');
    table.string('carrier', 100);
    table.string('case', 100);
    table.string('lot', 100);
    table.date('invoice_date');
    references(table, tableNames.skid);
    references(table, tableNames.user);
    references(table, tableNames.customer);
    references(table, tableNames.order);
    references(table, tableNames.specie);
  });




};



exports.down = async (knex) => {
  await Promise.all([
    tableNames.box,
    tableNames.order,
    tableNames.skid,
    tableNames.customer,
    tableNames.supplier,
    tableNames.address,
    tableNames.user,
    tableNames.country,
    tableNames.specie
  ].map((tableName) => knex.schema.dropTable(tableName)));
};
