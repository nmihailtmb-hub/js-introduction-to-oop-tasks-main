// BEGIN
const each = (kollekciya, callback) => {
  
  for (const element of kollekciya) {
    
    callback.call(element);
  }
};
// END

export default each;