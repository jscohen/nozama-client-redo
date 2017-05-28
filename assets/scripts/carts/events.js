'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
// const user = require('../store')
const showCartTemplate = require('../templates/cart.handlebars')

const createCart = function () {
  const data = {
    cart: {
      totalPrice: 0,
      products: []
    }
  }
  api.create(data)
      .then(ui.onCreateCartSuccess)
      .catch(ui.onCreateCartFailure)
}

// ***********************************************
const hideCart = function () {
  $('#cart').hide()
}

const showCart = function (cartData) {
  $('.about__section').hide()
  $('#cart').show()
  $('#landing').hide()
  $('#products').hide()
  $('.cart-body').hide()
  $('#order').hide()

  const showProductsHTML = showCartTemplate({
    cart: cartData
  })
  $('.fullCart').empty()
  $('.fullCart').append(showProductsHTML)
  $('#landing').hide()
  $('#fullCart').show()

  /* Assign actions */
  $('.remove-product').on('click', function () {
    removeItem(this)
  })
  /* Update quantity */
  $('.product-quantity input').change(function () {
    updateQuantity(this)
  })
}
/* Recalculate cart */
function recalculateCart () {
  const fadeTime = 300

  let subtotal = 0

  /* Sum up row totals */
  $('.product').each(function () {
    subtotal += parseFloat($(this).children('.product-line-price').text())
  })
  /* Calculate totals */
  const total = subtotal

  /* Update totals display */
  $('.totals-value').fadeOut(fadeTime, function () {
    $('#cart-subtotal').html(subtotal.toFixed(2))
    $('#cart-total').html(total.toFixed(2))
    if (total === 0) {
      $('.checkout').fadeOut(fadeTime)
    } else {
      $('.checkout').fadeIn(fadeTime)
    }
    $('.totals-value').fadeIn(fadeTime)
  })
}

const addToCart = function (data) {
  if (!store.user || jQuery.isEmptyObject(store.user)) {
    $('#addCartSignedOut').modal('show')
    return
  }
  const newTotalPrice = store.cart.totalPrice += data.price
  store.cart.totalPrice = newTotalPrice
  const params = {
    cart: {
      totalPrice: newTotalPrice,
      products: [{
        _id: data._id,
        sku: data.sku,
        quantity: 1,
        name: data.name,
        price: data.price
      }]
    }
  }
  store.addedItem = data.name
  store.cart.products.push(params.cart.products[0])
  api.update(params, 'add')
    .then(ui.onAddToCartSuccess)
    .catch(ui.onAddToCartFailure)
}

const removeFromCart = function (id) {
  for (let i = 0; i < store.cart.products.length; i++) {
    if (id === store.cart.products[i]._id) {
      const data = store.cart.products[i]
      const newTotalPrice = store.cart.totalPrice -= data.price
      store.cart.totalPrice = newTotalPrice
      const params = {
        cart: {
          totalPrice: newTotalPrice,
          products: [{
            _id: data._id,
            sku: data.sku,
            quantity: data.quantity,
            name: data.name,
            price: data.price
          }]
        }
      }
      store.cart.products.splice(i, 1)
      api.update(params, 'remove')
        .then(ui.onUpdateCartSuccess)
        .catch(ui.onUpdateCartFailure)
    }
  }
}

// $('.product-quantity input').change(function () {
//   updateQuantity(this)
// })

function updateQuantity (quantityInput) {
  /* Calculate line price */
  const productRow = $(quantityInput).parent().parent()
  const price = parseFloat(productRow.children('.product-price').text())
  const quantity = $(quantityInput).val()
  const linePrice = price * quantity
  const fadeTime = 300

  store.quantity = quantity

  console.log(productRow.attr('id'))

  const prodId = productRow.attr('id')
  const prodApi = require('../products/api')
  const prodUi = require('../products/ui')

  prodApi.show(prodId)
  .then(addQuantToProduct)
  .catch(prodUi.getProductFailure)
  .then(() =>
    productRow.children('.product-line-price').each(function () {
      $(this).fadeOut(fadeTime, function () {
        $(this).text(linePrice.toFixed(2))
        console.log(store.cart)
        recalculateCart()
        $(this).fadeIn(fadeTime)
      })
    })
  )
  /* Update line price display and recalc cart totals */
}

function addQuantToProduct (data) {
  console.log(data)
  console.log(data.product.price)
  console.log(store.quantity)
  const newTotalPrice = store.cart.totalPrice + (data.product.price * store.quantity)
  store.cart.totalPrice = newTotalPrice
  const pri = data.product.price * store.quantity
  const params = {
    cart: {
      totalPrice: newTotalPrice,
      products: [{
        _id: data.product._id,
        sku: data.product.sku,
        quantity: store.quantity,
        name: data.product.name,
        price: pri
      }]
    }
  }
  console.log(params)
  api.update(params, 'changeQuantity')
    .then(ui.onUpdateCartSuccess)
    .catch(ui.onUpdateCartFailure)
}

function removeItem (removeButton) {
  const fadeTime = 300
  /* Remove row from DOM and recalc cart total */
  const productRow = $(removeButton).parent().parent()
  const id = $(removeButton).parent().parent().attr('id')
  productRow.slideUp(fadeTime, function () {
    productRow.remove()
    recalculateCart()
  })

  removeFromCart(id)
}

const deleteCart = () => {
  api.destroy()
  .then(ui.deleteCartSuccess)
  .catch(ui.deleteCartFailure)
}

const onGetCart = () => {
  if (!store.user || jQuery.isEmptyObject(store.user)) {
    $('#notSignedIn').modal('show')
    return false
  }
  api.show().then(ui.onGetCartSuccess).catch(ui.onGetCartFailure)
}

const addHandlers = () => {
  // $('.glyphicon-shopping-cart').on('click', showCart)
  // $('.glyphicon-shopping-cart').on('click', recalculateCart)
  $('.glyphicon-shopping-cart').on('click', onGetCart)
}

module.exports = {
  hideCart,
  addHandlers,
  createCart,
  addToCart,
  deleteCart,
  showCart,
  recalculateCart
}
