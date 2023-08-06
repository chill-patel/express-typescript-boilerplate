
import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { ApiError } from '../exception/api_error';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler = (err: ApiError, req: Request, res: Response, next: NextFunction) => {
    let { statusCode, message } = err;
    if (process.env.stage === 'production' && !err.isOperational) {
        statusCode = httpStatus.INTERNAL_SERVER_ERROR;
        message = httpStatus[httpStatus.INTERNAL_SERVER_ERROR];
    }

    // res.locals.errorMessage = err.message;

    const response = {
        code: statusCode,
        message,
        ...(process.env.stage !== 'production' && { stack: err.stack }),
    };

    // if (config.env === 'development') {
    //     logger.error(err);
    // }

    res.status(statusCode).send(response);
};

export { errorHandler };