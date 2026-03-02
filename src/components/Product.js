class Product {
  constructor(basePrice, discountRate = 0, taxRate = 0) {
    this.basePrice = basePrice;
    this.discountRate = discountRate;
    this.taxRate = taxRate;
  }

  calculatePrice() {
    return this.basePrice;
  }
  getTax() {
    return this.basePrice * this.taxRate;
  }

}

export default Product;