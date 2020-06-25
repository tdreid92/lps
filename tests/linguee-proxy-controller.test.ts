import LambdaTester from 'lambda-tester';

const myHandler = require('../src/linguee-proxy-controller').handler;
import LambdaRequest from '../layers/common/nodejs/models/lambda-request';
import LambdaResponse from '../layers/common/nodejs/models/lambda-response';
import data from './events/apigateway.json';
const expect = require('chai');

describe('handler', function () {
  it('test success', async function () {
    const eventMocked = (<any>data).name;
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
