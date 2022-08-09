import { Component } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { LoggerService } from './logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProductService, LoggerService]
})
export class AppComponent {
  title = 'services';
  products:Product[] = [];
  //productService;

  //2.dependency injection

  constructor(private productService:ProductService) {

    //1. creating instance to access service : disadvantage
    //this.productService = new ProductService();
  }

  getProducts() {
    this.products = this.productService.getProducts();
  }
}
