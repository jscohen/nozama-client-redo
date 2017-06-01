'use strict'
const store = require('../store')
const showOrdersTemplate = require('../templates/order-history.handlebars')

const getOrdersSuccess = (data) => {
  store.orders = data.orders
  const showOrdersHTML = showOrdersTemplate({
    orders: data.orders
  })
  $('#order').empty()
  $('#order').append(showOrdersHTML)
  $('#landing').hide()
  $('#order').show()
}

const getOrdersFailure = (error) => {
  console.log(error)
}

const getOrderSuccess = (data) => {
  store.order = data.order
}

const getOrderFailure = (error) => {
  console.log(error)
}

const createOrderSuccess = () => {
  const cartApi = require('../carts/events')
  const api = require('../carts/api')
  const ui = require('../carts/ui')
  api.destroy()
  .then(ui.deleteCartSuccess)
  .catch(ui.deleteCartFailure)
  .then(cartApi.createCart)
  $('#orderPlaced').modal('show')
  $('input').val('')
  $('#card-expiry-month').val('Month')
  $('#card-expiry-year').val('Year')
  $('#place-order').hide()
  console.log(store.cart)
}

const createOrderFailure = () => {
  $('#orderError').modal('show')
}

module.exports = {
  getOrdersSuccess,
  getOrdersFailure,
  getOrderSuccess,
  getOrderFailure,
  createOrderSuccess,
  createOrderFailure
}
