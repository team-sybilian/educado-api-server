'use strict'

const Config = use('Config')
const ResponseHelper = use('ResponseHelper')
const UserRepository = use('UserRepository')

class EditController {
  async edit ({ request, response, params, transform }) {
    // Get request body
    const userId = params.id
    const userDetails = request.only(['username', 'password'])

    // Process
    let user = await transform.item(UserRepository.edit(userId, userDetails), 'UserTransformer')

    // Set response body
    const responseStatus = Config.get('response.status.success')
    const responseCode = Config.get('response.code.success.user.edit')
    const responseData = user
    const responseBody = ResponseHelper.formatResponse(response, responseStatus, responseCode, responseData)

    return responseBody
  }
}

module.exports = EditController
