import { FunctionNames } from "../utils/common-constants";

export default class LambdaRequest {
  public FunctionName: string;
  public Payload: string;
  public InvocationType: string;
  public LogType: string;

  constructor() {
    this.FunctionName = ""
    this.Payload = ""
    this.InvocationType = "RequestResponse";
    this.LogType = "Tail";
  }

  getFunctionName() {
    return this.FunctionName;
  }

  setFunctionName(functionName: string) {
    this.FunctionName = functionName;
    return this;
  }

  getPayload() {
    return this.Payload;
  }

  setPayload(payload: any) {
    this.Payload = JSON.stringify(payload);
    return this;
  }

  getInvocationType() {
    return this.InvocationType;
  }

  setInvocationType(invocationType: string) {
    this.InvocationType = invocationType;
    return this;
  }

  getLogType() {
    return this.LogType;
  }

  setLogType(logType: string) {
    this.LogType = logType;
    return this;
  }

  toPlainObj(): any {
    return Object.assign({}, this);
  }
}
