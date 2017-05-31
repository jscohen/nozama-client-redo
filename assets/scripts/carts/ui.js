'use strict'
const store = require('../store')

const onCreateCartSuccess = function (data) {
  store.cart = data.cart
  console.log(store.cart)
  console.log(data.cart)
}

const onCreateCartFailure = function (error) {
  console.log(error)
}

const onUpdateCartSuccess = function (data) {
  console.log('wahoo')
  const events = require('./events')
  events.onGetCart()
}

const onAddToCartSuccess = function (data) {
  $('.cartItem').empty()
  $('.cartItem').text(store.addedItem)
  $('#addItem').modal('show')
  console.log(data)
}

const onUpdateCartFailure = function (error) {
  console.log(error)
}

const deleteCartSuccess = function (data) {
  store.cart = null
}

const deleteCartFailure = function (error) {
  console.log(error)
}

const onGetCartSuccess = function (data) {
  const events = require('./events')
  console.log(data.cart)
  store.cart = data.cart
  events.showCart(data.cart)
  events.recalculateCart()
}

const onAddToCartFailure = function (error) {
  console.log(error)
}

const onAddDupSuccess = function (data) {
  console.log('item added a second time successfully')
}

module.exports = {
  onCreateCartSuccess,
  onCreateCartFailure,
  onUpdateCartSuccess,
  onUpdateCartFailure,
  deleteCartSuccess,
  deleteCartFailure,
  onGetCartSuccess,
  onAddToCartSuccess,
  onAddToCartFailure,
  onAddDupSuccess
}
