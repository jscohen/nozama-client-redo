'use strict'
const config = require('../config')

const index = (categoryName) => {
  return $.ajax({
    url: config.apiOrigin + '/products',
    method: 'GET',
    headers: {
      category: categoryName
    }
  })
}

const show = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/products/' + id,
    method: 'GET'
  })
}

module.exports = {
  index,
  show
}
