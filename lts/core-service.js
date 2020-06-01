"use strict";

const Functions = require("../layers/common/nodejs/utils/common-constants")
  .Functions;
const LambdaResponse = require("../layers/common/nodejs/models/lambda-response");
const LambdaRequest = require("../layers/common/nodejs/models/lambda-request");

const AWS = require("aws-sdk");
AWS.config.region = "us-east-1";
const lambda = new AWS.Lambda();

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

const getTranslation = async (src, dst, word) => {
  const request = new LambdaRequest()
    .setFunctionName(Functions.FIND_DB_TRANSLATION)
    .setPayload({
      src: src,
      dst: dst,
      word: word,
    });

  const x = await lambda.invoke(request).promise();
  console.log(x);
  const y = new LambdaResponse(x);
  return y;
};

exports.getTranslation = getTranslation;
