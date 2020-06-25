"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTranslation = void 0;
const common_constants_1 = require("../../layers/common/nodejs/utils/common-constants");
const lambda_1 = __importDefault(require("./util/lambda"));
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
exports.getTranslation = async (src, dst, word) => {
    const invocation = await new lambda_1.default()
        .setFunctionName(common_constants_1.FunctionNames.FIND_DB_TRANSLATION)
        .setPayload({
        src: src,
        dst: dst,
        word: word,
    })
        .invoke();
    console.log(invocation.Payload);
    return invocation.Payload;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS1zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29yZS1zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHdGQUFrRjtBQUtsRiwyREFBbUM7QUFFbkMsdUJBQXVCO0FBQ3ZCLCtCQUErQjtBQUMvQixxQ0FBcUM7QUFDckMsNkNBQTZDO0FBQzdDLG1EQUFtRDtBQUNuRCxpREFBaUQ7QUFDakQsYUFBYTtBQUNiLGlDQUFpQztBQUNqQyxNQUFNO0FBQ04sbUJBQW1CO0FBQ25CLEtBQUs7QUFDTCxxREFBcUQ7QUFFeEMsUUFBQSxjQUFjLEdBQUcsS0FBSyxFQUNqQyxHQUFXLEVBQ1gsR0FBVyxFQUNYLElBQVksRUFDWixFQUFFO0lBQ0YsTUFBTSxVQUFVLEdBQUcsTUFBTSxJQUFJLGdCQUFNLEVBQUU7U0FDbEMsZUFBZSxDQUFDLGdDQUFhLENBQUMsbUJBQW1CLENBQUM7U0FDbEQsVUFBVSxDQUFDO1FBQ1YsR0FBRyxFQUFFLEdBQUc7UUFDUixHQUFHLEVBQUUsR0FBRztRQUNSLElBQUksRUFBRSxJQUFJO0tBQ1gsQ0FBQztTQUNELE1BQU0sRUFBRSxDQUFDO0lBQ1osT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDaEMsT0FBTyxVQUFVLENBQUMsT0FBTyxDQUFDO0FBQzVCLENBQUMsQ0FBQyJ9