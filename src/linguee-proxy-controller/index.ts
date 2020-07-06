import awsServerlessExpress from 'aws-serverless-express';
import { app } from './app';
import { log } from './util/lambda-logger';
const server = awsServerlessExpress.createServer(app);

exports.handler = (event: any, context: any) => {
  log.initLogger(event, context);
  log.info('Event received');
  awsServerlessExpress.proxy(server, event, context);
};
