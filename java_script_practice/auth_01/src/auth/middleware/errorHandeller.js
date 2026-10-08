import {ErrorResponse} from '../../comman/errorresponse.js';

// Runs when a route doesn't exist
export const notFound = (req, res, next) =>
  next(new ErrorResponse(404, `Route not found: ${req.method} ${req.originalUrl}`));

// The ONE place where every error becomes a JSON response. Must be registered last.
export const errorHandler = (err, req, res, next) => {
  if (err instanceof ErrorResponse) {
    return res.status(err.statusCode).json({
      success: false,
      statusCode: err.statusCode,
      message: err.message,
      errors: err.errors,
    });
  }

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ success: false, statusCode: 400, message: 'Invalid JSON body', errors: [] });
  }

  // Unknown error: log it for yourself, send a safe message to the client
  console.error(err);
  res.status(500).json({ success: false, statusCode: 500, message: 'Internal server error', errors: [] });
};
