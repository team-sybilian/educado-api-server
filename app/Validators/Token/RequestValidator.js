'use strict'

const { formatters } = use('Validator')
const ValidationException = use('App/Exceptions/ValidationException')

class RequestValidator {
  get validateAll () {
    return true
  }

  get formatter () {
    return formatters.JsonApi
  }

  get rules () {
    return {
      username: 'required',
      password: 'required',
    }
  }

  get messages () {
    return {
      'username.required': 'Username is required.',
      'password.required': 'Password is required.'
    }
  }

  async fails (message) {
    throw new ValidationException(message)
  }
}

module.exports = RequestValidator
