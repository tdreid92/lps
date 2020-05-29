const LambdaTester = require( 'lambda-tester' );

const myHandler = require( '../index' ).handler;

describe( 'handler', function() {

    it( 'test success', async function() {

        await LambdaTester( myHandler )
            .event( { name: 'Fred' } )
            .expectResult();
    });
});