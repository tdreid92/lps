"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_sdk_1 = __importDefault(require("aws-sdk"));
const dDb = new aws_sdk_1.default.DynamoDB();
const docClient = new aws_sdk_1.default.DynamoDB.DocumentClient();
const TRANSLATIONS_TABLE = "Translations";
const DEFINITIONS_TABLE = "Definitions";
const buildPutRequests = (items) => {
    return items.map((it) => ({
        PutRequest: {
            Item: aws_sdk_1.default.DynamoDB.Converter.marshall(it),
        },
    }));
};
const getItem = async (tableName, key) => {
    const params = {
        TableName: tableName,
        Key: {
            translationKey: key,
        },
    };
    // console.log("Commence read of TranslationKey: ", key);
    return await docClient.get(params).promise();
};
const batchGetItem = async (tableName, keys) => {
    const params = {
        RequestItems: {
            [tableName]: {
                Keys: await keys.map((key) => ({
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
const resolveTranslations = async (translationKey, reversedTranslationKey) => {
    const translations = await Promise.all([
        getItem(TRANSLATIONS_TABLE, translationKey),
        getItem(TRANSLATIONS_TABLE, reversedTranslationKey),
    ]);
    return isEmpty(translations[0]) ? translations[1] : translations[0];
};
exports.handler = async (event) => {
    const translation = await resolveTranslations(event.translationKey, event.reversedTranslationKey);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHNEQUEwQjtBQUUxQixNQUFNLEdBQUcsR0FBRyxJQUFJLGlCQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7QUFFL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxpQkFBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUVwRCxNQUFNLGtCQUFrQixHQUFHLGNBQWMsQ0FBQztBQUMxQyxNQUFNLGlCQUFpQixHQUFHLGFBQWEsQ0FBQztBQUV4QyxNQUFNLGdCQUFnQixHQUFHLENBQUMsS0FBWSxFQUFFLEVBQUU7SUFDeEMsT0FBTyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3hCLFVBQVUsRUFBRTtZQUNWLElBQUksRUFBRSxpQkFBRyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztTQUMxQztLQUNGLENBQUMsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBRUYsTUFBTSxPQUFPLEdBQUcsS0FBSyxFQUFFLFNBQWlCLEVBQUUsR0FBVyxFQUFFLEVBQUU7SUFDdkQsTUFBTSxNQUFNLEdBQUc7UUFDYixTQUFTLEVBQUUsU0FBUztRQUNwQixHQUFHLEVBQUU7WUFDSCxjQUFjLEVBQUUsR0FBRztTQUNwQjtLQUNGLENBQUM7SUFDRix5REFBeUQ7SUFDekQsT0FBTyxNQUFNLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDL0MsQ0FBQyxDQUFDO0FBRUYsTUFBTSxZQUFZLEdBQUcsS0FBSyxFQUFFLFNBQWlCLEVBQUUsSUFBVyxFQUFFLEVBQUU7SUFDNUQsTUFBTSxNQUFNLEdBQUc7UUFDYixZQUFZLEVBQUU7WUFDWixDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNYLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRSxDQUFDLENBQUM7b0JBQ2xDLGFBQWEsRUFBRTt3QkFDYixDQUFDLEVBQUUsR0FBRztxQkFDUDtpQkFDRixDQUFDLENBQUM7YUFDSjtTQUNGO0tBQ0YsQ0FBQztJQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sTUFBTSxHQUFHLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO0FBQ2xELENBQUMsQ0FBQztBQUVGLE1BQU0sbUJBQW1CLEdBQUcsS0FBSyxFQUFFLGNBQXNCLEVBQUUsc0JBQThCLEVBQUUsRUFBRTtJQUMzRixNQUFNLFlBQVksR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUM7UUFDckMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLGNBQWMsQ0FBQztRQUMzQyxPQUFPLENBQUMsa0JBQWtCLEVBQUUsc0JBQXNCLENBQUM7S0FDcEQsQ0FBQyxDQUFDO0lBQ0gsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLENBQUMsQ0FBQztBQUVGLE9BQU8sQ0FBQyxPQUFPLEdBQUcsS0FBSyxFQUFFLEtBQWtFLEVBQUUsRUFBRTtJQUU3RixNQUFNLFdBQVcsR0FBRyxNQUFNLG1CQUFtQixDQUMzQyxLQUFLLENBQUMsY0FBYyxFQUNwQixLQUFLLENBQUMsc0JBQXNCLENBQzdCLENBQUM7SUFDRixJQUFJLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUN4QixPQUFPO1lBQ0wsVUFBVSxFQUFFLEdBQUc7WUFDZixHQUFHLEVBQUUsa0JBQWtCO1lBQ3ZCLE9BQU8sRUFBRSxFQUFFO1NBQ1osQ0FBQztLQUNIO0lBRUQsMENBQTBDO0lBQzFDLHVCQUF1QjtJQUN2QixvQ0FBb0M7SUFDcEMsS0FBSztJQUNMLE9BQU87SUFDTCxtQkFBbUI7SUFDbkIsNkRBQTZEO0lBQzdELHlDQUF5QztJQUN6QywrRUFBK0U7S0FDaEYsQ0FBQztBQUNKLENBQUMsQ0FBQyJ9