class Product {
  constructor(basePrice, discountRate = 0, taxRate = 0) {
    this.basePrice = basePrice;
    this.discountRate = discountRate;
    this.taxRate = taxRate;
  }

  calculatePrice() {
    return this.basePrice;
  }
  
  getDiscount() {
    return this.basePrice * this.discountRate;
  }


}

export default Product;