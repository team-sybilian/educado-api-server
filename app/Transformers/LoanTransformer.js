'use strict'

const BumblebeeTransformer = use('Bumblebee/Transformer')

/**
 * LoanTransformer class
 *
 * @class LoanTransformer
 * @constructor
 */
class LoanTransformer extends BumblebeeTransformer {
  static get defaultInclude () {
    return [
      'student',
      'lender'
    ]
  }

  /**
   * This method is used to transform the data.
   */
  transform (model) {
    return {
      id: model.id,
      student_id: model.student_id,
      lender_id: model.lender_id,      
      code: model.code,
      status: model.status,
      amount: model.amount,
      due_date: model.due_date,
      applied_at: model.applied_at,
      verified_at: model.verified_at,
      approved_at: model.approved_at,
      released_at: model.released_at,
      paid_at: model.paid_at,
      created_at: model.created_at,
      updated_at: model.updated_at
    }
  }

  includeStudent (model) {
    return this.item(model.getRelated('student'), 'StudentTransformer')
  }

  includeLender (model) {
    return this.item(model.getRelated('lender'), 'LenderTransformer')
  }
}

module.exports = LoanTransformer