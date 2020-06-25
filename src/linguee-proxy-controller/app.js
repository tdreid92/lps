"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = express_1.default();
const AWS = require("aws-sdk");
AWS.config.region = "us-east-1";
const core_service_1 = require("./core-service");
exports.app.get("/translation/:src/:dst/:word", async (req, res) => {
    const word = req.params.word.toLowerCase();
    const src = req.params.src.toLowerCase();
    const dst = req.params.dst.toLowerCase();
    console.log(`Commence translation of ${word} from ${src} to ${dst}.`);
    const translationResponse = await core_service_1.getTranslation(src, dst, word);
    res.send(translationResponse);
});
// Export your Express configuration so that it can be consumed by the Lambda handler
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHNEQUE4QjtBQUNqQixRQUFBLEdBQUcsR0FBRyxpQkFBTyxFQUFFLENBQUM7QUFDN0IsTUFBTSxHQUFHLEdBQUcsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQy9CLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztBQUNoQyxpREFBZ0Q7QUFFaEQsV0FBRyxDQUFDLEdBQUcsQ0FDTCw4QkFBOEIsRUFDOUIsS0FBSyxFQUNILEdBQTJELEVBQzNELEdBQWtDLEVBQ2xDLEVBQUU7SUFDRixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUMzQyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxNQUFNLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixJQUFJLFNBQVMsR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDdEUsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLDZCQUFjLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDaEMsQ0FBQyxDQUNGLENBQUM7QUFFRixxRkFBcUYifQ==