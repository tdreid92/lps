export default class Identity {
  constructor(identity) {
    this.cognitoIdentityId = identity.cognitoIdentityId;
    this.cognitoIdentityPoolId = identity.cognitoIdentityPoolId;
  }

  getCognitoIdentityId() {
    return this.cognitoIdentityId;
  }

  getCognitoIdentityPoolId() {
    return this.cognitoIdentityPoolId;
  }
}
