"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_tester_1 = __importDefault(require("lambda-tester"));
const myHandler = require("../lambdas/linguee-proxy-controller").handler;
const LambdaRequest = require("../layers/common/nodejs/models/lambda-request");
const LambdaResponse = require("../layers/common/nodejs/models/lambda-response");
const expect = require("chai").expect;
const createEvent = require("aws-event-mocks");
describe("handler", function () {
    it("test success", async function () {
        const event = createEvent({
            template: "aws:apiGateway",
            merge: {
                body: {
                    first_name: "Sam",
                    last_name: "Smith",
                },
            },
        });
        await lambda_tester_1.default(myHandler)
            .event(event)
            .expectResult((result) => {
            console.log(result);
            const expected = new LambdaResponse(result);
            expect(expected.getStatusCode()).to.equal(200);
            expect(expected.getPayload()).to.equal("test");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZ3VlZS1wcm94eS1jb250cm9sbGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5ndWVlLXByb3h5LWNvbnRyb2xsZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUF5QztBQUV6QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMscUNBQXFDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDekUsTUFBTSxhQUFhLEdBQUcsT0FBTyxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDL0UsTUFBTSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDakYsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUN0QyxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUvQyxRQUFRLENBQUMsU0FBUyxFQUFFO0lBQ2xCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsS0FBSztRQUN0QixNQUFNLEtBQUssR0FBRyxXQUFXLENBQUM7WUFDeEIsUUFBUSxFQUFFLGdCQUFnQjtZQUMxQixLQUFLLEVBQUU7Z0JBQ0wsSUFBSSxFQUFFO29CQUNKLFVBQVUsRUFBRSxLQUFLO29CQUNqQixTQUFTLEVBQUUsT0FBTztpQkFDbkI7YUFDRjtTQUNGLENBQUMsQ0FBQztRQUNILE1BQU0sdUJBQVksQ0FBQyxTQUFTLENBQUM7YUFDMUIsS0FBSyxDQUFDLEtBQUssQ0FBQzthQUNaLFlBQVksQ0FBQyxDQUFDLE1BQVcsRUFBRSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=