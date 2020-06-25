const isEmpty = (obj: { hasOwnProperty: (arg0: string) => any; }) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};

const dumpAndRecordError = (err: { stack: any; }) => {
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
