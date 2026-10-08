
export class ErrorResponse extends Error {

    constructor(message, statusCode, errors = []) {
        super(message);

        this.statusCode = statusCode;
        this.errors = errors;

        Error.captureStackTrace(this, this.constructor);
    }

    // 400 Bad Request
    static badRequest(message = "Bad request", errors = []) {
        return new ErrorResponse(message, 400, errors);
    }

    // 401 Unauthorized
    static unauthorized(message = "Unauthorized", errors = []) {
        return new ErrorResponse(message, 401, errors);
    }

    // 403 Forbidden
    static forbidden(message = "Forbidden", errors = []) {
        return new ErrorResponse(message, 403, errors);
    }

    // 404 Not Found
    static notFound(message = "Resource not found", errors = []) {
        return new ErrorResponse(message, 404, errors);
    }

    // 405 Method Not Allowed
    static methodNotAllowed(message = "Method not allowed", errors = []) {
        return new ErrorResponse(message, 405, errors);
    }

    // 409 Conflict
    static conflict(message = "Conflict", errors = []) {
        return new ErrorResponse(message, 409, errors);
    }

    // 422 Unprocessable Entity
    static unprocessableEntity(message = "Validation failed", errors = []) {
        return new ErrorResponse(message, 422, errors);
    }

    // 429 Too Many Requests
    static tooManyRequests(message = "Too many requests", errors = []) {
        return new ErrorResponse(message, 429, errors);
    }
}

