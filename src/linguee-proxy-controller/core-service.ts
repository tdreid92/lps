import { FunctionNames } from "../../layers/common/nodejs/utils/common-constants";
import LambdaResponse from "../../layers/common/nodejs/models/lambda-response";
import LambdaRequest from "../../layers/common/nodejs/models/lambda-request";

import AWS from "aws-sdk";
import Lambda from "./util/lambda";

// var lambda = () => {
//   lambda = new AWS.Lambda();
//   if (process.env.AWS_SAM_LOCAL) {
//     // only run inside local lambda runner
//     var ep = new AWS.Endpoint("localhost:3001");
//     lambda = new AWS.Lambda({ endpoint: ep });
//   } else {
//     lambda = new AWS.Lambda();
//   }
//   return lambda;
// };
//const two = new Promise(resolve => resolve('Two'));

export const getTranslation = async (
  src: string,
  dst: string,
  word: string
) => {
  const invocation = await new Lambda()
    .setFunctionName(FunctionNames.FIND_DB_TRANSLATION)
    .setPayload({
      src: src,
      dst: dst,
      word: word,
    })
    .invoke();
  console.log(invocation.Payload);
  return invocation.Payload;
};
