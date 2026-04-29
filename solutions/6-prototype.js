// BEGIN
function Dengi(summa, valuta = 'usd') {
  this.value = summa;
  this.currency = valuta;
}

Dengi.prototype.getValue = function () {
  return this.value;
};

Dengi.prototype.getCurrency = function () {
  return this.currency;
};

Dengi.prototype.exchangeTo = function (nuzhnayaValuta) {
  let koeff = 1;
  if (this.currency === 'usd' && nuzhnayaValuta === 'eur') {
    koeff = 0.7;
  } else if (this.currency === 'eur' && nuzhnayaValuta === 'usd') {
    koeff = 1.2;
  }
  const novSumma = this.value * koeff;
  return new Dengi(novSumma, nuzhnayaValuta);
};

Dengi.prototype.add = function (drugieDengi) {
  const skonvertirovannye = drugieDengi.exchangeTo(this.currency);
  const itogSumma = this.value + skonvertirovannye.getValue();
  return new Dengi(itogSumma, this.currency);
};

Dengi.prototype.format = function () {
  const kodValuty = this.currency === 'usd' ? 'USD' : 'EUR';
  return this.value.toLocaleString('en-US', { style: 'currency', currency: kodValuty });
};
// END

export default Dengi;