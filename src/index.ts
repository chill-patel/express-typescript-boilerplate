import 'reflect-metadata';
import { server } from './app'


const exitHandler = () => {
  if (server) {
    server.close(() => {
      // logger.info('Server closed');
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const unexpectedErrorHandler = (error: Error) => {
  // logger.error(error);
  exitHandler();
};

process.on('uncaughtException', unexpectedErrorHandler);
process.on('unhandledRejection', unexpectedErrorHandler);

process.on('SIGTERM', () => {
  // logger.info('SIGTERM received');
  if (server) {
    server.close();
  }
});
