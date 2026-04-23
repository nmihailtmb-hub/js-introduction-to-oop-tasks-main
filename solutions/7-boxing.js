// BEGIN
export default function magic(...initialArgs) {
  const sum = initialArgs.reduce((acc, num) => acc + num, 0);
  
  function inner(...args) {
    const additionalSum = args.reduce((acc, num) => acc + num, 0);
    return magic(sum + additionalSum);
  }
  
  inner.valueOf = function() {
    return sum;
  };
  
  return inner;
}
// END