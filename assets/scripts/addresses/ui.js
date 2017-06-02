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
  const showAddressTemplate = require('../templates/address.handlebars')
  store.addresses = data
  console.log(store.addresses.address)
  console.log('get address success')
  const showAddressesHTML = showAddressTemplate({
    address: store.addresses.address
  })
  $('.address-display').empty()
  $('.address-display').append(showAddressesHTML)
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
