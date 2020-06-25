import LambdaResponse from "../../../layers/common/nodejs/models/lambda-response";
import LambdaRequest from "../../../layers/common/nodejs/models/lambda-request";

import AWS from "aws-sdk";
AWS.config.region = "us-east-1";
const awsLambda = new AWS.Lambda();

export default class Lambda extends LambdaRequest {
  async invoke(): Promise<any> {
    const response = await awsLambda.invoke(this.toPlainObj()).promise();
    console.log(response);
    return response;
  }
}
