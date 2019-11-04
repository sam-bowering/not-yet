exports.up = (knex, Promise) => {
  return knex.schema.createTable('tasks', table => {
    table.increments('id').primary()
    table.string('name')
    table.string('description')
    table.boolean('completed')
    table.integer('goal_id')
      .references('goals.id')
      .onDelete('CASCADE')
  })
}

exports.down = (knex, Promise) => {
  return knex.schema.dropTable('tasks')
}
