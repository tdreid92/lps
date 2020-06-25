import awsServerlessExpress from 'aws-serverless-express';
import { app } from './app';
const server = awsServerlessExpress.createServer(app);

exports.handler = (event: any, context: any) => {
  console.log('EVENT: \n' + JSON.stringify(event, null, 2));
  awsServerlessExpress.proxy(server, event, context);
};
