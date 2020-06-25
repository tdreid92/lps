"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const identity_1 = __importDefault(require("./identity"));
class Context {
    constructor(context) {
        this.functionName = context.functionName;
        this.functionVersion = context.functionVersion;
        this.invokedFunctionArn = context.invokedFunctionArn;
        this.memoryLimitInMB = context.memoryLimitInMB;
        this.awsRequestId = context.awsRequestId;
        this.logGroupName = context.logGroupName;
        this.logStreamName = context.logStreamName;
        this.identity = new identity_1.default(context.identity);
        this.clientContext = context.clientContext;
        this.callbackWaitsForEmptyEventLoop =
            context.callbackWaitsForEmptyEventLoop;
    }
    getFunctionName() {
        return this.functionName;
    }
    getFunctionVersion() {
        return this.functionVersion;
    }
    getInvokedFunctionArn() {
        return this.invokedFunctionArn;
    }
    getMemoryLimitInMB() {
        return this.memoryLimitInMB;
    }
    getAwsRequestId() {
        return this.awsRequestId;
    }
    getLogGroupName() {
        return this.logGroupName;
    }
    getLogStreamName() {
        return this.logStreamName;
    }
    getIdentity() {
        return this.identity;
    }
    getClientContext() {
        return this.clientContext;
    }
    getCallbackWaitsForEmptyEventLoop() {
        return this.callbackWaitsForEmptyEventLoop;
    }
}
exports.default = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwwREFBa0M7QUFFbEMsTUFBcUIsT0FBTztJQUkxQixZQUFZLE9BQU87UUFDakIsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDO1FBQ3JELElBQUksQ0FBQyxlQUFlLEdBQUcsT0FBTyxDQUFDLGVBQWUsQ0FBQztRQUMvQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUM7UUFDekMsSUFBSSxDQUFDLFlBQVksR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksa0JBQVEsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzNDLElBQUksQ0FBQyw4QkFBOEI7WUFDakMsT0FBTyxDQUFDLDhCQUE4QixDQUFDO0lBQzNDLENBQUM7SUFFRCxlQUFlO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7SUFFRCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDO0lBQzlCLENBQUM7SUFFRCxxQkFBcUI7UUFDbkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUM7SUFDakMsQ0FBQztJQUVELGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7SUFDOUIsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQztJQUVELGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO0lBQzVCLENBQUM7SUFFRCxpQ0FBaUM7UUFDL0IsT0FBTyxJQUFJLENBQUMsOEJBQThCLENBQUM7SUFDN0MsQ0FBQztDQUNGO0FBekRELDBCQXlEQyJ9