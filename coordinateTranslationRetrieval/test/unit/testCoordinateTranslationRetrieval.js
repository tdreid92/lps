const LambdaTester = require("lambda-tester");
const myHandler = require("../../index").handler;
var LambdaRequest = require("../../../layers/common/nodejs/models/lambda-request");
var LambdaResponse = require("../../../layers/common/nodejs/models/lambda-response");
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
