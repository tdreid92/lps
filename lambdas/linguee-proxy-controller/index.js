"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aws_serverless_express_1 = __importDefault(require("aws-serverless-express"));
const app_1 = require("./app");
const server = aws_serverless_express_1.default.createServer(app_1.app);
exports.handler = (event, context) => aws_serverless_express_1.default.proxy(server, event, context);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG9GQUEwRDtBQUMxRCwrQkFBNEI7QUFDNUIsTUFBTSxNQUFNLEdBQUcsZ0NBQW9CLENBQUMsWUFBWSxDQUFDLFNBQUcsQ0FBQyxDQUFDO0FBRXRELE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFVLEVBQUUsT0FBWSxFQUFFLEVBQUUsQ0FDN0MsZ0NBQW9CLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMifQ==