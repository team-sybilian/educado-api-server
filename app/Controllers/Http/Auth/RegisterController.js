'use strict'

const Config = use('Config')
const Helpers = use('Educado/Helpers')
const UserRepository = use('App/Repositories/UserRepository')

class RegisterController {

  constructor () {
    this.userRepository = UserRepository
  }

  async register ({ request, response }) {
    // Get request body
    const requestBody = request.only(['username', 'password', 'type'])

    // Process
    let user = await this.userRepository.add(requestBody)

    // Set response body
    const responseStatus = Config.get('response.status.success')
    const responseCode = Config.get('response.code.success.auth.register')
    const responseData = { user }
    const responseBody = Helpers.formatResponse(response, responseStatus, responseCode, responseData)

    return responseBody
  }
}

module.exports = RegisterController