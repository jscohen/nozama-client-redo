'use strict'
require('../index')
const cartsEvents = require('../carts/events')

const store = require('../store')

const signUpSuccess = () => {
  $('#sign-up').trigger('reset')
  $('#signUpSuccess').modal('show')
  $('.dropdown-menu').trigger('click')
}
const signUpFailure = () => {
  $('#sign-up').trigger('reset')
  $('#signUpFailure').modal('show')
  $('.dropdown-menu').trigger('click')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('#sign-in').trigger('reset')
  $('.sign-in').hide()
  $('.sign-out').show()
  $('.dropdown-menu').trigger('click')
  cartsEvents.createCart()
  $('#welcome').modal('show')
}

const signInFailure = (error) => {
  $('#sign-in').trigger('reset')
  $('#signInFailure').modal('show')
  $('.dropdown-menu').trigger('click')
  console.log('inside sign in failure', error)
}

const signOutSuccess = (data) => {
  $('.sign-in').show()
  $('.sign-out').hide()
  $('#signOut').modal('show')
  $('#landing').show()
  $('#cart').hide()
  $('#products').hide()
  $('#checkout-container').hide()
  $('#orders').hide()
  store.user = {}
}

const signOutFailure = () => {
//  console.error('signout failure ran error is ', error)
}

const chgPswdSuccess = () => {
  $('#change-password').trigger('reset')
  $('#chgPswdSuccess').modal('show')
  $('.sign-out').show()
  $('.change-password').hide()
}

const chgPswdFailure = () => {
  $('.dropdown-menu').trigger('click')
  $('#chgPswdFailure').modal('show')
//  console.error(error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  chgPswdSuccess,
  chgPswdFailure
}
