import express from 'express';
import helmet from "helmet";
import compression from 'compression';
import 'dotenv/config'
import { ApiError } from './exception/api_error';
import * as HttpStatus from 'http-status';
import { errorHandler } from './middleware/error_handler';
import { errorConverter } from './middleware/error_converter';
import { userRoute } from './modules/user/user.route';

console.log()

const app = express();


// set security HTTP headers
app.use(helmet());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// gzip compression
app.use(compression());

app.use('/user', userRoute);


// send back a 404 error for any unknown api request
app.use((req, res, next) => {
    next(new ApiError(HttpStatus.NOT_FOUND, 'Not found'));
});

app.use(errorConverter);
app.use(errorHandler);



const port = process.env.PORT || 4000
const server = app.listen(port, () =>
    console.log(`Example app listening on port ${port}!`),
);



export { server }
