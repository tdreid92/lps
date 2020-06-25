"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lambda_tester_1 = __importDefault(require("lambda-tester"));
const myHandler = require('../src/linguee-proxy-controller').handler;
const lambda_response_1 = __importDefault(require("../layers/common/nodejs/models/lambda-response"));
const apigateway_json_1 = __importDefault(require("./events/apigateway.json"));
const expect = require('chai');
describe('handler', function () {
    it('test success', async function () {
        const eventMocked = apigateway_json_1.default;
        await lambda_tester_1.default(myHandler)
            .event(eventMocked)
            .expectResult((result) => {
            console.log(result);
            const expected = new lambda_response_1.default(result);
            expect(expected.getStatusCode()).to.equal(200);
            expect(expected.getPayload()).to.equal('test');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGluZ3VlZS1wcm94eS1jb250cm9sbGVyLnRlc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaW5ndWVlLXByb3h5LWNvbnRyb2xsZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGtFQUF5QztBQUV6QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFFckUscUdBQTRFO0FBQzVFLCtFQUE0QztBQUM1QyxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFL0IsUUFBUSxDQUFDLFNBQVMsRUFBRTtJQUNsQixFQUFFLENBQUMsY0FBYyxFQUFFLEtBQUs7UUFDdEIsTUFBTSxXQUFXLEdBQVEseUJBQUksQ0FBQztRQUM5QixNQUFNLHVCQUFZLENBQUMsU0FBUyxDQUFDO2FBQzFCLEtBQUssQ0FBQyxXQUFXLENBQUM7YUFDbEIsWUFBWSxDQUFDLENBQUMsTUFBVyxFQUFFLEVBQUU7WUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLHlCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=