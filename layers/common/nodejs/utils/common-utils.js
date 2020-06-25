"use strict";
const isEmpty = (obj) => {
    for (const key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
};
const dumpAndRecordError = (err) => {
    // if (typeof err === "object") {
    //   if (err.message) {
    //     console.log("\nMessage: " + err.message);
    //   }
    //   if (err.stack) {
    //     console.log("\nStacktrace:");
    //     console.log("====================");
    //     console.log(err.stack);
    //   }
    // } else {
    //   console.log("dumpError :: argument is not an object");
    // }
    return err.stack;
};
module.exports = {
    isEmpty: isEmpty,
    dumpAndRecordError: dumpAndRecordError,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLE9BQU8sR0FBRyxDQUFDLEdBQStDLEVBQUUsRUFBRTtJQUNsRSxLQUFLLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBRTtRQUNyQixJQUFJLEdBQUcsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDO1lBQUUsT0FBTyxLQUFLLENBQUM7S0FDM0M7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQztBQUVGLE1BQU0sa0JBQWtCLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEVBQUU7SUFDbEQsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsMkNBQTJDO0lBQzNDLDhCQUE4QjtJQUM5QixNQUFNO0lBQ04sV0FBVztJQUNYLDJEQUEyRDtJQUMzRCxJQUFJO0lBQ0osT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixPQUFPLEVBQUUsT0FBTztJQUNoQixrQkFBa0IsRUFBRSxrQkFBa0I7Q0FDdkMsQ0FBQyJ9