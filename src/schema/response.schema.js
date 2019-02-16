// modules
import { JOI } from '../config/app.config'

/**
 * Response schema.
 *
 * @module response_schema
 * @author Lexus Drumgold <lex@lexusdrumgold.design>
 */

const ResponseMessage = JOI.string().min(1).required()

export const ErrorResponse = JOI.object().keys({
  status: JOI.number()
    .valid(400, 401, 402, 403, 404, 405, 500, 501, 502).required(),
  message: ResponseMessage
})

export const SuccessResponse = JOI.object().keys({
  status: JOI.number().valid(200, 201, 203, 204).required(),
  message: ResponseMessage,
  data: JOI.any().allow(null)
})
