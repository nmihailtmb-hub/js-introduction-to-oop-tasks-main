import _ from 'lodash';

// BEGIN
class Cart {
  constructor() {
    this.tovary = []; 
  }

  addItem(tovar, kolvo) {
    
    const naydenny = this.tovary.find(({ item }) => item.name === tovar.name);
    if (naydenny) {
      naydenny.count += kolvo;
    } else {
      this.tovary.push({ item: tovar, count: kolvo });
    }
  }

  getItems() {
    return this.tovary;
  }

  getCost() {
    return this.tovary.reduce((sum, { item, count }) => sum + item.price * count, 0);
  }

  getCount() {
    return this.tovary.reduce((sum, { count }) => sum + count, 0);
  }
}
// END

export default Cart;