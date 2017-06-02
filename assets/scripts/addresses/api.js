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

const get = () => {
  return $.ajax({
    url: config.apiOrigin + '/addresses',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  create,
  get
}
