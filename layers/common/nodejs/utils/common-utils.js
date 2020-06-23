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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbW9uLXV0aWxzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY29tbW9uLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQztBQUViLE1BQU0sT0FBTyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDdEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxHQUFHLEVBQUU7UUFDckIsSUFBSSxHQUFHLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQztZQUFFLE9BQU8sS0FBSyxDQUFDO0tBQzNDO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDLENBQUM7QUFFRixNQUFNLGtCQUFrQixHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUU7SUFDakMsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixnREFBZ0Q7SUFDaEQsTUFBTTtJQUNOLHFCQUFxQjtJQUNyQixvQ0FBb0M7SUFDcEMsMkNBQTJDO0lBQzNDLDhCQUE4QjtJQUM5QixNQUFNO0lBQ04sV0FBVztJQUNYLDJEQUEyRDtJQUMzRCxJQUFJO0lBQ0osT0FBTyxHQUFHLENBQUMsS0FBSyxDQUFDO0FBQ25CLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxPQUFPLEdBQUc7SUFDZixPQUFPLEVBQUUsT0FBTztJQUNoQixrQkFBa0IsRUFBRSxrQkFBa0I7Q0FDdkMsQ0FBQyJ9