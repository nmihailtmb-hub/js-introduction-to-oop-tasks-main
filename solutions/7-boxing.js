// BEGIN
const magic = (...chisla) => {
  const summa = chisla.reduce((akk, tek) => akk + tek, 0);

  const vnutrFunc = (...esheChisla) => {
    return magic(...chisla, ...esheChisla);
  };


  vnutrFunc.valueOf = () => summa;
  return vnutrFunc;
};
// END

export default magic;