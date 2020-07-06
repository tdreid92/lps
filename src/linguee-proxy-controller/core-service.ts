import { FunctionNamespace, LambdaInvoker } from '../../layers/common/nodejs/models/lambda';

export const getTranslation = async (src: string, dst: string, word: string) => {
  const invocation = await new LambdaInvoker(FunctionNamespace.LingueeProxyController)
    .setPayload({
      src: src,
      dst: dst,
      word: word
    })
    .invoke();
  console.log(invocation.Payload);
  return invocation.Payload;
};
