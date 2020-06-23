export default class Identity {
  private cognitoIdentityId: any;
  private cognitoIdentityPoolId: string;

  constructor(identity: {
    cognitoIdentityId: any;
    cognitoIdentityPoolId: string;
  }) {
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
