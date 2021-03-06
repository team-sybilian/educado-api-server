'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class LoanSchema extends Schema {
  up () {
    this.create('loans', (table) => {
      table.increments()
      table.integer('student_id').unsigned().references('id').inTable('students')
      table.integer('lender_id').unsigned().references('id').inTable('lenders')
      table.string('description', 80).notNullable()      
      table.string('code', 80).notNullable()
      table.string('status', 80).notNullable()
      table.integer('amount').notNullable()
      table.integer('due_amount').nullable()
      table.float('interest').nullable()
      table.datetime('applied_at').nullable()
      table.datetime('endorsed_at').nullable()
      table.datetime('approved_at').nullable()
      table.datetime('accepted_at').nullable()
      table.datetime('released_at').nullable()
      table.datetime('received_at').nullable()
      table.datetime('paid_at').nullable()
      table.datetime('due_at').nullable()
      table.datetime('cancelled_at').nullable()
      table.datetime('denied_at').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('loans')
  }
}

module.exports = LoanSchema
