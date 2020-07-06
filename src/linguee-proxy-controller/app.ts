import express from 'express';
import { getTranslation } from './core-service';
import { log } from './util/lambda-logger';
import { FunctionNamespace, LambdaInvoker } from '../../layers/common/nodejs/models/lambda';
export const app = express();

app.get(
  '/translation/:src/:dst/:word',
  async (req: { params: { word: string; src: string; dst: string } }, res: { send: (arg0: any) => void }) => {
    log.info(`Received request to process ${JSON.stringify(req.params)}`);
    const word = req.params.word.toLowerCase();
    const src = req.params.src.toLowerCase();
    const dst = req.params.dst.toLowerCase();

    // const translationResponse = await getTranslation(src, dst, word);
    const invocation = await new LambdaInvoker(FunctionNamespace.FindDbTranslation)
      .setPayload({
        src: src,
        dst: dst,
        word: word
      })
      .invoke();
    console.log(invocation.Payload, process.env.SIMULATE_AWS_ENDPOINT);
    res.send(invocation);
    // res.send('hi');
  }
);

// Export your Express configuration so that it can be consumed by the Lambda handler
