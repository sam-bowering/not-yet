exports.seed = function (knex) {
  return knex('tasks').del()
    .then(function () {
      return knex('tasks').insert([
        { id: 1, name: 'Get fit', description: 'Work out', completed: false, goal_id: 1 },
        { id: 2, name: 'Prepare before the game', description: 'Count your blessings', completed: false, goal_id: 1 },
        { id: 3, name: 'Steal the ball', description: 'Tackle player', completed: false, goal_id: 2 }
      ])
    })
}
