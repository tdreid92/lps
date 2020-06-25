"use strict";

export default class LambdaResponse {
  private statusCode: number | undefined;
  private payload: string | undefined;
  constructor(options = {}) {
    this.statusCode = 666;
    this.payload = "yo";
    Object.assign(this, options);
  }

  getStatusCode() {
    return this.statusCode;
  }

  getPayload() {
    return this.payload;
  }

  // static fromJSON(json) {
  //   const obj = JSON.parse(json);
  //   return new LambdaResponse(obj.);
  // }
}
