// BEGIN
const bind = (kontekst, func) => {
  
  return function (...args) {
    
    return func.apply(kontekst, args);
  };
};
// END

export default bind;