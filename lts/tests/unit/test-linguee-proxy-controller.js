"use strict";

const LambdaTester = require("lambda-tester");
const createEvent = require("@serverless/event-mocks");
const myHandler = require("../../index").handler;
const LambdaRequest = require("../../../layers/common/nodejs/models/lambda-request");
const LambdaResponse = require("../../../layers/common/nodejs/models/lambda-response");
const expect = require("chai").expect;

describe("handler", function () {
  it("test success", async function () {
    const event = createEvent("aws:apiGateway", {
      body: {
        first_name: "Sam",
        last_name: "Smith",
      },
    });
    await LambdaTester(myHandler)
      .event(myMock)
      .expectResult((result) => {
        console.log(result);
        const expected = new LambdaResponse(result);
        expect(expected.getStatusCode()).to.equal(200);
        expect(expected.getPayload()).to.equal("test");
      });
  });
});
