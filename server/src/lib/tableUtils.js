// use to help build tables for migrations


function addDefaultColumns(table) {
  table.timestamps(false, true); // creates: created@ and updated@ fields.
  table.datetime('deleted_at');
}

function references(table, foreignTableName, notNullable = true) {
  const definition = table
    .integer(`${foreignTableName}_id`)
    .unsigned()
    .references('id')
    .inTable(foreignTableName)
    .onDelete('cascade');

  if (notNullable) {
    definition.notNullable();
  }
}

module.exports = {
  addDefaultColumns,
  references
};