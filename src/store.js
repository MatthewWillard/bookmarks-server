const uuid = require('uuid/v4')

const bookmarks = [
  { id: uuid(),
    title: 'ESPN',
    url: 'https://www.espn.com',
    description: 'Sports y'/'all',
    rating: 4 },
  { id: uuid(),
    title: 'Netflix',
    url: 'https://www.netflix.com',
    description: 'Where everyone watches The Office',
    rating: 5 },
  { id: uuid(),
    title: 'Twitter',
    url: 'https://www.twitter.org',
    description: 'Where poeople say stupid stuff',
    rating: 1 },
]

module.exports = { bookmarks }