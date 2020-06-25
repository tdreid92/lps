import AWS from "aws-sdk";

const dDb = new AWS.DynamoDB();

const docClient = new AWS.DynamoDB.DocumentClient();

const TRANSLATIONS_TABLE = "Translations";
const DEFINITIONS_TABLE = "Definitions";

const buildPutRequests = (items: any[]) => {
  return items.map((it) => ({
    PutRequest: {
      Item: AWS.DynamoDB.Converter.marshall(it),
    },
  }));
};

const getItem = async (tableName: string, key: string) => {
  const params = {
    TableName: tableName,
    Key: {
      translationKey: key,
    },
  };
  // console.log("Commence read of TranslationKey: ", key);
  return await docClient.get(params).promise();
};

const batchGetItem = async (tableName: string, keys: any[]) => {
  const params = {
    RequestItems: {
      [tableName]: {
        Keys: await keys.map((key: any) => ({
          definitionKey: {
            S: key,
          },
        })),
      },
    },
  };
  console.log(JSON.stringify(params));
  return await dDb.batchGetItem(params).promise();
};

const resolveTranslations = async (translationKey: string, reversedTranslationKey: string) => {
  const translations = await Promise.all([
    getItem(TRANSLATIONS_TABLE, translationKey),
    getItem(TRANSLATIONS_TABLE, reversedTranslationKey),
  ]);
  return isEmpty(translations[0]) ? translations[1] : translations[0];
};

exports.handler = async (event: { translationKey: string; reversedTranslationKey: string; }) => {

  const translation = await resolveTranslations(
    event.translationKey,
    event.reversedTranslationKey
  );
  if (isEmpty(translation)) {
    return {
      StatusCode: 204,
      Msg: "No content found",
      Payload: {},
    };
  }

  // const definitions = await batchGetItem(
  //   DEFINITIONS_TABLE,
  //   translation.Item.definitionKeys
  // );
  return {
    // StatusCode: 200,
    // Payload: definitions.Responses.Definitions.map((d: any) =>
    //   AWS.DynamoDB.Converter.unmarshall(d)
    // ).sort((a: { index: number; }, b: { index: number; }) => a.index - b.index),
  };
};
