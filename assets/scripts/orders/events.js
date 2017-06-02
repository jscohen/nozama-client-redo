'use strict'

const ordersApi = require('./api.js')
const ordersUi = require('./ui.js')
const store = require('../store.js')
const prod = require('../products/events')

const getOrders = function () {
  ordersApi.index()
  .then(ordersUi.getOrdersSuccess)
  .catch(ordersUi.getOrdersFailure)
  $('#landing').hide()
  $('#products').hide()
  $('#cart').hide()
  $('#checkout-container').hide()
  $('.about__section').hide()
}

const getOrder = function (orderId) {
  ordersApi.show(orderId)
  .then(ordersUi.getOrderSuccess)
  .catch(ordersUi.getOrderFailure)
}

const checkout = function (event) {
  const addressFunc = require('../addresses/events')
  if ($('#checkBox').is(':checked')) {
    console.log('its checked!')
    const params = {
      address: {
        street: $('input[name=address]').val(),
        city: $('input[name=city]').val(),
        state: $('input[name=state]').val(),
        country: $('input[name=country]').val(),
        zip: $('input[name=zip_code]').val()
      }
    }
    addressFunc.createAddress(params)
  }
  const handler = StripeCheckout.configure({
    key: 'pk_test_9WemBaMhQokjQEfkfAQiLXmr',
    image: 'https://stripe.com/img/documentation/checkout/marketplace.png',
    locale: 'auto',
    email: store.user.email,
    token: function (token) {
      const tok = token.id
      const order = {
        order: {
          shippingAddress: {
            recipientName: $('input[name=name]').val(),
            address: $('input[name=address]').val(),
            city: $('input[name=city]').val(),
            state: $('input[name=state]').val(),
            country: $('input[name=country]').val(),
            zip: $('input[name=zip_code]').val()
          },
          totalPrice: parseInt(store.cart.totalPrice, 10),
          products: store.cart.products
        }
      }

      ordersApi.create(order, tok)
      .then(ordersUi.createOrderSuccess)
      .catch(ordersUi.createOrderFailure)
    }
  })
  handler.open({
    name: 'Nozama',
    description: 'Nozama Order',
    amount: store.cart.totalPrice
  })
  event.preventDefault()
}

// const stripeResponseHandler = function (status, response) {
//   if (response.error) {
//     console.log(response.error)
//     $('.orderIssue').text(response.error.message)
//     $('#orderError').modal('show')
//     return false
//   } else {
//     const token = response.id
//
//     store.stripeToken = token
//
//     const order = {
//       order: {
//         shippingAddress: {
//           recipientName: $('input[name=name]').val(),
//           address: $('input[name=address]').val(),
//           city: $('input[name=city]').val(),
//           state: $('input[name=state]').val(),
//           country: $('input[name=country]').val(),
//           zip: $('input[name=zip_code]').val()
//         },
//         totalPrice: parseInt(store.cart.totalPrice, 10),
//         products: store.cart.products
//       }
//     }
//     ordersApi.create(order, token)
//     .then(ordersUi.createOrderSuccess)
//     .catch(ordersUi.createOrderFailure)
//   }
// }

const hideOrder = function () {
  $('#order').hide()
  $('#checkout-container').hide()
}
const showOrderForm = function () {
  const addressAPI = require('../addresses/events')
  addressAPI.getAddresses()
  $('#cart').hide()
  $('#checkout-container').show()
  $('.about__section').hide()
  $('.cart-body').show()
  $('#place-order').show()
}

// const setupStripe = function () {
//   Stripe.setPublishableKey('pk_test_9WemBaMhQokjQEfkfAQiLXmr')
// }

const getSavedAddress = function (event) {
  console.log('inside saved address')
  event.preventDefault()
}

const addHandlers = () => {
  $('#order-button').on('click', getOrders)
  $('#order-form').on('submit', checkout)
  $('#checkout-button').on('click', showOrderForm)
  $('#shop-again').on('click', prod.returnHomeButton)
  $('#use_address').on('submit', getSavedAddress)
}

module.exports = {
  getOrders,
  getOrder,
  hideOrder,
  addHandlers
}
