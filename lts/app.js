var express = require('express');
var app = express();
var AWS = require('aws-sdk');
AWS.config.region = 'us-east-1';

var lambda = () => {
  lambda = new AWS.Lambda()
  if(process.env.AWS_SAM_LOCAL) {
    // only run inside local lambda runner
     var ep = new AWS.Endpoint('localhost:3001');
     lambda = new AWS.Lambda({endpoint: ep})
  } else {
    lambda = new AWS.Lambda();
  }
  return lambda;
};

const GET_TRANSLATION = 'coordinateTranslationRetrieval';

const getTranslation = async (src, dst, word) => {
  
    const params = {
      FunctionName: GET_TRANSLATION,
      LogType: 'Tail',
      Payload: JSON.stringify({ 
        src: src,
        dst: dst,
        word: word
      })
    }; 
    return await lambda.invoke(params).promise();
    //return JSON.parse((await lambda.invoke(params).promise()).Payload);
};

app.get('/translation/:src_lang/:dst_lang/:word', async (req, res) => {
  
  const word = req.params.word.toLowerCase(), src = req.params.src_lang,
    dst = req.params.dst_lang;
  console.log(`Commence translation of ${word} from ${src} to ${dst}.`);
  // res.send('hi');
  const translationResponse = await getTranslation(src, dst, word);
  res.send(translationResponse);
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
