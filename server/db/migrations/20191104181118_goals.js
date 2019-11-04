exports.up = (knex, Promise) => {
  return knex.schema.createTable('goals', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.boolean('completed')
    table.boolean('primary')
    table.integer('dependants')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('goals')
}
