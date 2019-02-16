/* eslint-disable camelcase */

// packages
import * as Joi from 'joi'

/**
 * @file A set of utility functions for interacting with the application.
 * @module app
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Compares the first argument against the schema provided in the first
 * argument.
 *
 * @param {*} data - value being validated
 * @param {ObjectSchema} schema - schema to check against
 * @returns {*} value if schema is valid
 * @throws {Error} if error validating schema
 */
export const validate_schema = (data, schema) => {
  const { value, error } = Joi.validate(data, schema)

  if (error) throw error

  return value
}
