import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
import { Product } from "./product";

@Injectable()
export class ProductService {

  constructor(private loggerService:LoggerService) {
      this.loggerService.log("Product Service Constructed");
  }

  getProducts() {
  
  this.loggerService.log("getProducts called");
  let products:Product[];

  products = [
        new Product(1,'Memory Card', 500),
        new Product(1,'Pen Drive', 750),
        new Product(1,'Power Bank', 1000)
  ]

  this.loggerService.log(products);
  return products;
}

}