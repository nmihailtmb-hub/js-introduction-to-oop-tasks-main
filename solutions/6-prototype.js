// BEGIN
export default function Money(value, currency = 'usd') {
  this.value = value;
  this.currency = currency;
}

Money.prototype.getValue = function getValue() {
  return this.value;
};

Money.prototype.getCurrency = function getCurrency() {
  return this.currency;
};

Money.prototype.exchangeTo = function exchangeTo(targetCurrency) {
  if (this.currency === targetCurrency) {
    return new Money(this.value, targetCurrency);
  }
  
  let newValue;
  if (this.currency === 'usd' && targetCurrency === 'eur') {
    newValue = this.value * 0.7;
  } else if (this.currency === 'eur' && targetCurrency === 'usd') {
    newValue = this.value * 1.2;
  }
  
  return new Money(newValue, targetCurrency);
};

Money.prototype.add = function add(money) {
  const convertedMoney = money.exchangeTo(this.currency);
  return new Money(this.value + convertedMoney.getValue(), this.currency);
};

Money.prototype.format = function format() {
  const options = {
    style: 'currency',
    currency: this.currency === 'usd' ? 'USD' : 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  };
  
  let formatted = this.value.toLocaleString('en-US', options);
  
  
  if (this.currency === 'usd') {
    return '$' + this.value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  } else {
    return '€' + this.value.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
};
// END