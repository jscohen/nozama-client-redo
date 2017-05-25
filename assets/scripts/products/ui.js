'use strict'
const store = require('../store')
const showProductsTemplate = require('../templates/browse-products.handlebars')
const products = require('./products')
const cartsEvents = require('../carts/events')

const getProductsSuccess = (data) => {
  store.data = data
  products.products = store.data
  const showProductsHTML = showProductsTemplate({
    products: data.products
  })
  $('.products').empty()
  $('.products').append(showProductsHTML)
  $('#landing').hide()
  $('#products').show()
  $('.about__section').hide()

  $('.browse-products').on('click', function () {
    event.preventDefault()
    console.log(event.target.id)
    const result = $.grep(products.products.products, function (e) {
      return e._id === event.target.id
    })
    console.log('result is', result)
    cartsEvents.addToCart(result[0])
  })
}

const getProductsFailure = (error) => {
  console.log(error)
}

const getProductSuccess = (product) => {
  store.product = product
  console.log(product)
}

const getProductFailure = (error) => {
  console.log(error)
}

module.exports = {
  getProductsSuccess,
  getProductsFailure,
  getProductSuccess,
  getProductFailure
}
