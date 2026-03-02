import Product from "../src/components/Product.js";
import { calculateTotal } from "../src/utils/pricing.js";

const mk = (price, discount = 0, tax = 0) => new Product(price, discount, tax);

console.log("Total:", calculateTotal([mk(100)]));