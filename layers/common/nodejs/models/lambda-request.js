class LambdaRequest {
  constructor() {
    this.functionName = null;
    this.payload = null;
    this.invocationType = "RequestResponse";
    this.logType = "Tail";
  }

  getFunctionName() {
    return this.functionName;
  }

  setFunctionName(functionName) {
    this.functionName = functionName;
    return this;
  }

  getPayload() {
    return this.payload;
  }

  setPayload(payload) {
    this.payload = JSON.stringify(payload);
  }

  getInvocationType() {
    return this.invocationType;
  }

  setInvocationType(invocationType) {
    this.invocationType = invocationType;
    return this;
  }

  getLogType() {
    return this.logType;
  }

  setLogType(logType) {
    this.logType = logType;
    return this;
  }
}

module.exports = LambdaRequest;
