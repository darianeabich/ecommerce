import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CartService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';

@Component({
  selector: 'ecommerce-cart-detail',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.scss',
})
export class CartDetailComponent {
  cartService = inject(CartService);

  product$ = this.cartService.getProducts();
}
