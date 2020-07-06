import { LambdaLog } from 'lambda-log';
const region = process.env.AWS_REGION;
const stage = process.env.STAGE;

export class CustomLambdaLogger extends LambdaLog {
  initLogger = (event: any, context: any): void => {
    this.options.meta = {
      requestId: context.awsRequestId,
      lambdaName: context.functionName,
      version: context.functionVersion
    };
    this.options.tags?.push(stage as string, region as string);
    // this.options.dynamicMeta = function (message) {
    //   return {
    //     timestamp: new Date().toISOString()
    //   };
    //};
  };
}

export const log = new CustomLambdaLogger();
