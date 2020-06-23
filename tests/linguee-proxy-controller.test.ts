import LambdaTester from "lambda-tester";

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
    await LambdaTester(myHandler)
      .event(event)
      .expectResult((result: any) => {
        console.log(result);
        const expected = new LambdaResponse(result);
        expect(expected.getStatusCode()).to.equal(200);
        expect(expected.getPayload()).to.equal("test");
      });
  });
});
