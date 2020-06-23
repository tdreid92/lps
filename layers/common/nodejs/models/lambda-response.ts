"use strict";

export default class LambdaResponse {
  private statusCode: number;
  private payload: string;
  constructor(options = {}) {
    this.statusCode = null;
    this.payload = null;
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
