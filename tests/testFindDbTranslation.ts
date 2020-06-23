"use strict";
const LambdaTester = require("lambda-tester");
const myHandler = require("../lambdas/find-db-translation").handler;
var LambdaRequest = require("../layers/common/nodejs/models/lambda-request");
var LambdaResponse = require("../layers/common/nodejs/models/lambda-response");
var expect = require("chai").expect;
describe("handler", function () {
    const test1 = new LambdaRequest("XYX", "stuff", "RequestResponse");
    it("test success", async function () {
        await LambdaTester(myHandler)
            .event({ test1 })
            .expectResult((result) => {
            console.log(result);
            const expected = new LambdaResponse(result);
            expect(expected.getStatusCode()).to.equal(200);
            expect(expected.getPayload()).to.equal("test");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEZpbmREYlRyYW5zbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdEZpbmREYlRyYW5zbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLFlBQVksR0FBRyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDOUMsTUFBTSxTQUFTLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQztBQUNqRCxJQUFJLGFBQWEsR0FBRyxPQUFPLENBQUMsd0RBQXdELENBQUMsQ0FBQztBQUN0RixJQUFJLGNBQWMsR0FBRyxPQUFPLENBQUMseURBQXlELENBQUMsQ0FBQztBQUN4RixJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDO0FBRXBDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7SUFDbEIsTUFBTSxLQUFLLEdBQUcsSUFBSSxhQUFhLENBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLEVBQUUsQ0FBQyxjQUFjLEVBQUUsS0FBSztRQUN0QixNQUFNLFlBQVksQ0FBQyxTQUFTLENBQUM7YUFDMUIsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7YUFDaEIsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUU7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMvQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==