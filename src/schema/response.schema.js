// packages
import * as Joi from 'joi'

/**
 * Response schema.
 *
 * @module response_schema
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const ResponseMessage = Joi.string().min(1).required()

export const ErrorResponse = Joi.object().keys({
  status: Joi.number()
    .valid(400, 401, 402, 403, 404, 405, 500, 501, 502).required(),
  message: ResponseMessage
})

export const SuccessResponse = Joi.object().keys({
  status: Joi.number().valid(200, 201, 203, 204).required(),
  message: ResponseMessage,
  data: Joi.any().allow(null)
})
