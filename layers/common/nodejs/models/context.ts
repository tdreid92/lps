import Identity from "./identity";

export default class Context {
  private functionName: string;
  private functionVersion: string;
  private invokedFunctionArn: string;
  constructor(context) {
    this.functionName = context.functionName;
    this.functionVersion = context.functionVersion;
    this.invokedFunctionArn = context.invokedFunctionArn;
    this.memoryLimitInMB = context.memoryLimitInMB;
    this.awsRequestId = context.awsRequestId;
    this.logGroupName = context.logGroupName;
    this.logStreamName = context.logStreamName;
    this.identity = new Identity(context.identity);
    this.clientContext = context.clientContext;
    this.callbackWaitsForEmptyEventLoop =
      context.callbackWaitsForEmptyEventLoop;
  }

  getFunctionName() {
    return this.functionName;
  }

  getFunctionVersion() {
    return this.functionVersion;
  }

  getInvokedFunctionArn() {
    return this.invokedFunctionArn;
  }

  getMemoryLimitInMB() {
    return this.memoryLimitInMB;
  }

  getAwsRequestId() {
    return this.awsRequestId;
  }

  getLogGroupName() {
    return this.logGroupName;
  }

  getLogStreamName() {
    return this.logStreamName;
  }

  getIdentity() {
    return this.identity;
  }

  getClientContext() {
    return this.clientContext;
  }

  getCallbackWaitsForEmptyEventLoop() {
    return this.callbackWaitsForEmptyEventLoop;
  }
}
