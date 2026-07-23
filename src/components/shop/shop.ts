import { Component, inject, OnInit, signal } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../../interfaces/product';
import { ProductsService } from '../../services/products-service';

@Component({
  selector: 'app-shop',
  imports: [ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop implements OnInit {
  private readonly productsService = inject(ProductsService)
  allProducts: Product[] = [];
  ngOnInit(): void {

    this.productsService.getProducts().subscribe({
      next: (res) => {
        this.allProducts = res;
        console.log('%cResponse:', 'background:red; color:white; padding:2px 6px; border-radius:4px;', this.allProducts);
      },

      error: () => { }
    })
  }

}
