const AWS = require("aws-sdk");
AWS.config.region = "us-east-1";

const lambda = new AWS.Lambda();

const SEP = "-";
const PROCESS_LINGUEE_SCRAPE = "lps-processLingueeScrape";
const GET_TRANSLATION_IN_DB = "lps-getTranslationInDb";

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

const processLingueeScrape = async (src, dst, word) => {
  const start = new Date().getTime();
  const params = {
    FunctionName: PROCESS_LINGUEE_SCRAPE,
    Payload: JSON.stringify({
      src: src,
      dst: dst,
      word: word,
    }),
  };

  console.log(`Scrape and processing request: ${JSON.stringify(params)}`);
  const processLingueeScrapePromise = await lambda.invoke(params).promise();

  console.log("Scrape and processing time: ", new Date().getTime() - start);
  return processLingueeScrapePromise.Payload;
};

function dumpError(err) {
  if (typeof err === "object") {
    if (err.message) {
      console.log("\nMessage: " + err.message);
    }
    if (err.stack) {
      console.log("\nStacktrace:");
      console.log("====================");
      console.log(err.stack);
    }
  } else {
    console.log("dumpError :: argument is not an object");
  }
}

const getTranslationInDb = async (translationKey, reversedTranslationKey) => {
  const start = new Date().getTime();
  const params = {
    FunctionName: GET_TRANSLATION_IN_DB,
    Payload: JSON.stringify({
      translationKey: translationKey,
      reversedTranslationKey: reversedTranslationKey,
    }),
  };

  console.log(`DynamoDb Request: ${JSON.stringify(params)}`);
  const getTranslationInDbPromise = await lambda.invoke(params).promise();

  console.log("DynamoDb processing time: ", new Date().getTime() - start);
  return JSON.parse(getTranslationInDbPromise.Payload).Payload;
};

exports.handler = async (event, context, callback) => {
  const src = event.src,
    dst = event.dst,
    word = event.word;
  const translationKey = src + SEP + dst + SEP + word;
  const reversedTranslationKey = dst + SEP + src + SEP + word;
  // callback(null, "test");

  try {
    throw new Error("myError");
  } catch (e) {
    dumpError(e);
  }
};
