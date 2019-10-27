exports.seed = function(knex) {
  return knex('list').del()
    .then(function () {
      return knex('list').insert([
        {id: 1, name: 'Score a goal', description: '', completed: false, primary: false, dependants: 2},
        {id: 2, name: 'Get the ball', description: '', completed: false, primary: false, dependants: 0},
        {id: 3, name: 'Kick the ball into the goal', description: '', completed: false, primary: false, dependants: 1}
      ])
    })
}
