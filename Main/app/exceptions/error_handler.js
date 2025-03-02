import { Exception } from '@adonisjs/core/exceptions';
import { errors } from '@vinejs/vine';
export default function errorHandler(error, response, logger, log = 'Controller Error') {
    logger.error(log + ': %j', error);
    if (error instanceof errors.E_VALIDATION_ERROR) {
        return response.status(422).json({ success: false, messages: error.messages });
    }
    if (error instanceof Exception) {
        return response.status(error.status).json({ success: false, message: error.message });
    }
    return response.internalServerError({
        success: false,
        message: error.message || 'An unexpected error occurred',
    });
}
//# sourceMappingURL=error_handler.js.map