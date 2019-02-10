// packages
import { Joi } from 'celebrate';

// config
import { AXIOS_INSTANCE } from '../config/constants.config';

/**
 * A set of Application utility functions.
 *
 * @file Utility functions for interacting with the application
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

/**
 * Forms a request.
 *
 * @param {string} method request type. post | get | patch | delete
 * @param {string} url url to request
 * @param {*} data data to send
 * @returns {*} data requested
 * @throws {Error} if error requesting data
 */
export const request = async (method, url, data) => {
  try {
    let req = await AXIOS_INSTANCE({ method: method, url: url, data: data });
    return req.data;
  } catch (error) {
    throw new Error(error.response.data.error);
  }
};

/**
 * Compares the first argument against the schema provided in the first
 * argument.
 *
 * @param {*} data - value being validated
 * @param {ObjectSchema} schema - schema to check against
 * @returns {Promise<* | undefined>} promise containing the validated value or
 * null if the value does not match the provided schema
 * @throws {Error} if error validating schema
 */
export const validate_schema = (data, schema) => {
  const { value, error } = Joi.validate(data, schema);

  if (error) throw error;

  return value;
};
