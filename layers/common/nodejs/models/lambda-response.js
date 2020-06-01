"use strict";

class LambdaResponse {
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

module.exports = LambdaResponse;
