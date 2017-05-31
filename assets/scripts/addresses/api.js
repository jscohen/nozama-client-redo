'use strict'
const config = require('../config')
const store = require('../store')

const create = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/addresses',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  create
}
