const isEmpty = (obj: { hasOwnProperty: (arg0: string) => any }) => {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
};
