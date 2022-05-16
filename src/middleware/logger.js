//[19]
const logger = store => next => action => {
  console.group(action.type);
  console.log("The action: ", action);
  //next here will be dispatch because in index.js logger is the last middleware
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd();
  return returnValue;
};

export default logger;
