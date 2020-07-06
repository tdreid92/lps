import LambdaTester from 'lambda-tester';

const myHandler = require('../../src/linguee-proxy-controller').handler;
import LambdaRequest from '../../layers/common/nodejs/models/lambda';
import LambdaResponse from '../../layers/common/nodejs/models/lambda-response';
import data from './events/ApiGateway-translation-en-de-word.json';
const expect = require('chai');

describe('handler', function () {
  it('test success', async function () {
    // process.env.REGION = 'us-east-1';
    // process.env.STAGE = 'dev';
    const eventMocked = <any>data;
    await LambdaTester(myHandler)
      .event(eventMocked)
      .expectResult((result: any) => {
        console.log(result);
        const expected = new LambdaResponse(result);
        expect(expected.getStatusCode()).to.equal(200);
        expect(expected.getPayload()).to.equal('test');
      });
  });
});
