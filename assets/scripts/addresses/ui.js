'use strict'
const store = require('../store')

const onCreateAddressSuccess = function (data) {
  console.log(data)
  console.log('address created')
}

const onCreateAddressFailure = function (error) {
  console.log(error)
}

const onGetAddressSuccess = function (data) {
  console.log(data)
  store.addresses = data
  console.log('get address success')
}

const onGetAddressFailure = function (error) {
  console.log(error)
}

module.exports = {
  onCreateAddressSuccess,
  onCreateAddressFailure,
  onGetAddressSuccess,
  onGetAddressFailure
}
