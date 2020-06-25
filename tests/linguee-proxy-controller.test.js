"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_tester_1 = __importDefault(require("lambda-tester"));
const myHandler = require("../lambdas/linguee-proxy-controller").handler;
const lambda_response_1 = __importDefault(require("../layers/common/nodejs/models/lambda-response"));
const apigateway_json_1 = __importDefault(require("./events/apigateway.json"));
const expect = require("chai");
describe("handler", function () {
    it("test success", async function () {
        const eventMocked = apigateway_json_1.default.name;
        await lambda_tester_1.default(myHandler)
            .event(eventMocked)
            .expectResult((result) => {
            console.log(result);
            const expected = new lambda_response_1.default(result);
            expect(expected.getStatusCode()).to.equal(200);
            expect(expected.getPayload()).to.equal("test");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZ3VlZS1wcm94eS1jb250cm9sbGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5ndWVlLXByb3h5LWNvbnRyb2xsZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUF5QztBQUV6QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFekUscUdBQTRFO0FBQzVFLCtFQUE0QztBQUM1QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFL0IsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUNsQixFQUFFLENBQUMsY0FBYyxFQUFFLEtBQUs7UUFDcEIsTUFBTSxXQUFXLEdBQVMseUJBQUssQ0FBQyxJQUFJLENBQUM7UUFDdkMsTUFBTSx1QkFBWSxDQUFDLFNBQVMsQ0FBQzthQUMxQixLQUFLLENBQUMsV0FBVyxDQUFDO2FBQ2xCLFlBQVksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTSxRQUFRLEdBQUcsSUFBSSx5QkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVDLE1BQU0sQ0FBQyxRQUFRLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9