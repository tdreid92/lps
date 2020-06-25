'use strict';
const LambdaTester = require('lambda-tester');
const myHandler = require('../src/find-db-translation').handler;
var LambdaRequest = require('../layers/common/nodejs/models/lambda-request');
var LambdaResponse = require('../layers/common/nodejs/models/lambda-response');
var expect = require('chai').expect;
describe('handler', function () {
    const test1 = new LambdaRequest('XYX', 'stuff', 'RequestResponse');
    it('test success', async function () {
        await LambdaTester(myHandler)
            .event({ test1 })
            .expectResult((result) => {
            console.log(result);
            const expected = new LambdaResponse(result);
            expect(expected.getStatusCode()).to.equal(200);
            expect(expected.getPayload()).to.equal('test');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdEZpbmREYlRyYW5zbGF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGVzdEZpbmREYlRyYW5zbGF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUNiLE1BQU0sWUFBWSxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5QyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsNEJBQTRCLENBQUMsQ0FBQyxPQUFPLENBQUM7QUFDaEUsSUFBSSxhQUFhLEdBQUcsT0FBTyxDQUFDLCtDQUErQyxDQUFDLENBQUM7QUFDN0UsSUFBSSxjQUFjLEdBQUcsT0FBTyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7QUFDL0UsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sQ0FBQztBQUNwQyxRQUFRLENBQUMsU0FBUyxFQUFFO0lBQ2xCLE1BQU0sS0FBSyxHQUFHLElBQUksYUFBYSxDQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNuRSxFQUFFLENBQUMsY0FBYyxFQUFFLEtBQUs7UUFDdEIsTUFBTSxZQUFZLENBQUMsU0FBUyxDQUFDO2FBQzFCLEtBQUssQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDO2FBQ2hCLFlBQVksQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDcEIsTUFBTSxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDL0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=