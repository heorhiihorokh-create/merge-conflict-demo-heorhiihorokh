class Product {
  constructor(basePrice, discountRate = 0, taxRate = 0) {
    this.basePrice = basePrice;
    this.discountRate = discountRate;
    this.taxRate = taxRate;
  }

  calculatePrice() {
    const priceAfterDiscount = this.basePrice - this.getDiscount();
    return priceAfterDiscount + this.getTax(priceAfterDiscount);
  }

  getDiscount() {
    return this.basePrice * this.discountRate;
  }

  getTax(priceAfterDiscount) {
    return priceAfterDiscount * this.taxRate;
  }
}

export default Product;