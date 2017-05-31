'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const createAddress = function (data) {
  const address = data
  api.create(address)
      .then(ui.onCreateAddressSuccess)
      .catch(ui.onCreateAddressFailure)
}

module.exports = {
  createAddress
}
