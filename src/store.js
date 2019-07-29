const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'ESPN',
    url: 'https://www.espn.com',
    description: 'SPORTSBALL!!!',
    rating: 5 },
]

module.exports = { bookmarks }