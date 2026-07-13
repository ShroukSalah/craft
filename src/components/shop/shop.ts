import { Component } from '@angular/core';
import { ProductCard } from "../product-card/product-card";
import { Product } from '../../app/product';

@Component({
  selector: 'app-shop',
  imports: [ProductCard],
  templateUrl: './shop.html',
  styleUrl: './shop.css',
})
export class Shop {

  products: Product[] = [
    {
      id: 1,
      name: 'Jaipur Art and Rugs Decorative, Cushion',
      price: 149.99,
      image: 'images/pro1.jpg',
    },
     {
      id: 2,
      name: 'ASTRID 20 Cms Blue Cotton Travel Pouch',
      price: 255,
      image: 'images/pro2.jpg',
    },
     {
      id: 3,
      name: 'Teng Jin Nantucket Round Handicraft',
      price: 149.99,
      image: 'images/pro3.jpg',
    }
  ];

}
