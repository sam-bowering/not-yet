exports.seed = function (knex) {
  return knex('goals').del()
    .then(function () {
      return knex('goals').insert([
        { id: 1, name: 'Score a goal', description: 'Run and score you numpty', completed: true, primary: true, dependants: 2 },
        { id: 2, name: 'Get the ball', description: 'Get the ball you numpty', completed: false, primary: false, dependants: 0 },
        { id: 3, name: 'Kick the ball into the goal', description: 'This is already a score you numpty', completed: false, primary: false, dependants: 1 }
      ])
    })
}
