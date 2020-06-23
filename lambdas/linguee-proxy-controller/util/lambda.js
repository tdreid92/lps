"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_request_1 = __importDefault(require("../../../layers/common/nodejs/models/lambda-request"));
const aws_sdk_1 = __importDefault(require("aws-sdk"));
aws_sdk_1.default.config.region = "us-east-1";
const awsLambda = new aws_sdk_1.default.Lambda();
class Lambda extends lambda_request_1.default {
    async invoke() {
        const response = await awsLambda.invoke(this.toPlainObj()).promise();
        console.log(response);
        return response;
    }
}
exports.default = Lambda;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGFtYmRhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGFtYmRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EseUdBQWdGO0FBRWhGLHNEQUEwQjtBQUMxQixpQkFBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO0FBQ2hDLE1BQU0sU0FBUyxHQUFHLElBQUksaUJBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztBQUVuQyxNQUFxQixNQUFPLFNBQVEsd0JBQWE7SUFDL0MsS0FBSyxDQUFDLE1BQU07UUFDVixNQUFNLFFBQVEsR0FBRyxNQUFNLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN0QixPQUFPLFFBQVEsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFORCx5QkFNQyJ9