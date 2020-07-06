"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.region = 'us-east-1';
const dDb = new aws_sdk_1.default.DynamoDB();
const docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
// const TRANSLATIONS_TABLE = 'Translations';
// const DEFINITIONS_TABLE = 'Definitions';
//
// const buildPutRequests = (items: any[]) => {
//   return items.map((it) => ({
//     PutRequest: {
//       Item: AWS.DynamoDB.Converter.marshall(it)
//     }
//   }));
// };
//
// const getItem = async (tableName: string, key: string) => {
//   const params = {
//     TableName: tableName,
//     Key: {
//       translationKey: key
//     }
//   };
//   // console.log("Commence read of TranslationKey: ", key);
//   return await docClient.get(params).promise();
// };
//
// const batchGetItem = async (tableName: string, keys: any[]) => {
//   const params = {
//     RequestItems: {
//       [tableName]: {
//         Keys: await keys.map((key: any) => ({
//           definitionKey: {
//             S: key
//           }
//         }))
//       }
//     }
//   };
//   // console.log(JSON.stringify(params));
//   return await dDb.batchGetItem(params).promise();
// };
//
// const resolveTranslations = async (
//   translationKey: string,
//   reversedTranslationKey: string
// ) => {
//   const translations = await Promise.all([
//     getItem(TRANSLATIONS_TABLE, translationKey),
//     getItem(TRANSLATIONS_TABLE, reversedTranslationKey)
//   ]);
//   return isEmpty(translations[0]) ? translations[1] : translations[0];
// };
exports.handler = async (event) => {
    // const translation = await resolveTranslations(
    //   event.translationKey,
    //   event.reversedTranslationKey
    // );
    // if (isEmpty(translation)) {
    return {
        StatusCode: 204,
        Msg: 'No content found',
        Payload: {}
    };
    // }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwQjtBQUMxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBRWhDLE1BQU0sR0FBRyxHQUFHLElBQUksaUJBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUUvQixNQUFNLFNBQVMsR0FBRyxJQUFJLGlCQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBRXBELDZDQUE2QztBQUM3QywyQ0FBMkM7QUFDM0MsRUFBRTtBQUNGLCtDQUErQztBQUMvQyxnQ0FBZ0M7QUFDaEMsb0JBQW9CO0FBQ3BCLGtEQUFrRDtBQUNsRCxRQUFRO0FBQ1IsU0FBUztBQUNULEtBQUs7QUFDTCxFQUFFO0FBQ0YsOERBQThEO0FBQzlELHFCQUFxQjtBQUNyQiw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLDRCQUE0QjtBQUM1QixRQUFRO0FBQ1IsT0FBTztBQUNQLDhEQUE4RDtBQUM5RCxrREFBa0Q7QUFDbEQsS0FBSztBQUNMLEVBQUU7QUFDRixtRUFBbUU7QUFDbkUscUJBQXFCO0FBQ3JCLHNCQUFzQjtBQUN0Qix1QkFBdUI7QUFDdkIsZ0RBQWdEO0FBQ2hELDZCQUE2QjtBQUM3QixxQkFBcUI7QUFDckIsY0FBYztBQUNkLGNBQWM7QUFDZCxVQUFVO0FBQ1YsUUFBUTtBQUNSLE9BQU87QUFDUCw0Q0FBNEM7QUFDNUMscURBQXFEO0FBQ3JELEtBQUs7QUFDTCxFQUFFO0FBQ0Ysc0NBQXNDO0FBQ3RDLDRCQUE0QjtBQUM1QixtQ0FBbUM7QUFDbkMsU0FBUztBQUNULDZDQUE2QztBQUM3QyxtREFBbUQ7QUFDbkQsMERBQTBEO0FBQzFELFFBQVE7QUFDUix5RUFBeUU7QUFDekUsS0FBSztBQUVMLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBR3hCLEVBQUUsRUFBRTtJQUNILGlEQUFpRDtJQUNqRCwwQkFBMEI7SUFDMUIsaUNBQWlDO0lBQ2pDLEtBQUs7SUFDTCw4QkFBOEI7SUFDOUIsT0FBTztRQUNMLFVBQVUsRUFBRSxHQUFHO1FBQ2YsR0FBRyxFQUFFLGtCQUFrQjtRQUN2QixPQUFPLEVBQUUsRUFBRTtLQUNaLENBQUM7SUFDRixJQUFJO0lBRUosMENBQTBDO0lBQzFDLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsS0FBSztJQUNMLE9BQU87SUFDTCxtQkFBbUI7SUFDbkIsNkRBQTZEO0lBQzdELHlDQUF5QztJQUN6QywrRUFBK0U7S0FDaEYsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9