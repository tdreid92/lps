import express from "express";
export const app = express();
const AWS = require("aws-sdk");
AWS.config.region = "us-east-1";
import { getTranslation } from "./core-service";

app.get(
  "/translation/:src/:dst/:word",
  async (
    req: { params: { word: string; src: string; dst: string } },
    res: { send: (arg0: any) => void }
  ) => {
    const word = req.params.word.toLowerCase();
    const src = req.params.src.toLowerCase();
    const dst = req.params.dst.toLowerCase();
    console.log(`Commence translation of ${word} from ${src} to ${dst}.`);
    const translationResponse = await getTranslation(src, dst, word);
    res.send(translationResponse);
  }
);

// Export your Express configuration so that it can be consumed by the Lambda handler
