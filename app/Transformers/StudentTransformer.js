'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * StudentTransformer class
 *
 * @class StudentTransformer
 * @constructor
 */
class StudentTransformer extends BumblebeeTransformer {
  static get defaultInclude () {
    return [
      'school',
      'guarantor'
    ]
  }

  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      id: model.id,
      user_id: model.user_id,
      school_id: model.school_id,
      name: model.name,
      phone_number: model.phone_number,
      email: model.email,
      source_of_funds: model.source_of_funds,
      source_of_funds_description: model.source_of_funds_description,
      student_number: model.student_number,
      date_of_birth: model.date_of_birth,
      place_of_birth: model.place_of_birth,
      present_address: model.present_address,
      permanent_address: model.permanent_address,
      created_at: model.created_at,
      updated_at: model.updated_at
    }
  }

  includeSchool (model) {
    return this.item(model.getRelated('school'), 'SchoolTransformer')
  }

  includeGuarantor (model) {
    return this.item(model.getRelated('guarantor'), 'GuarantorTransformer')
  }
}

module.exports = StudentTransformer
