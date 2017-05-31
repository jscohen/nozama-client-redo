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
const getAddresses = function (data) {
  api.get().then(ui.onGetAddressSuccess).catch(ui.onGetAddressFailure)
}

module.exports = {
  createAddress,
  getAddresses
}
