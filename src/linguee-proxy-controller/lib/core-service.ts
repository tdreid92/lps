import { LambdaInvoker } from '../../../layers/common/nodejs/models/lambda';
import { FunctionNamespace } from '../../../layers/common/nodejs/utils/common-constants';

export const getTranslation = async (src: string, dst: string, word: string) => {
  const invocation = await new LambdaInvoker(FunctionNamespace.FIND_DB_TRANSLATION)
    .setPayload({
      src: src,
      dst: dst,
      word: word
    })
    .invoke();
  return invocation.Payload;
};
