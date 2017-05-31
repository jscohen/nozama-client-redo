'use strict'
const store = require('../store')

const onCreateAddressSuccess = function (data) {
  console.log(data)
  console.log('address created')
}

const onCreateAddressFailure = function (error) {
  console.log(error)
}

module.exports = {
  onCreateAddressSuccess,
  onCreateAddressFailure
}
