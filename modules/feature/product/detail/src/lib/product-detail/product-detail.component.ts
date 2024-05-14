import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { Product, ProductSearchService } from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { getParamsId } from './get-params';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, QuantityDescriptionPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  // @Input() id!: string;
  productSearchService = inject(ProductSearchService);

  product$ = getParamsId().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );

  productSignal = toSignal(this.product$);

  // count = signal(0);
  cart = signal<Product[]>([]);
  quantity = computed(() => this.cart().length);
  quantityObservable$ = toObservable(this.quantity);

  constructor() {
    effect(() => console.log('Quantidade no carrinho: ', this.quantity()));
  }

  addToCart(product: Product): void {
    // this.count.update((value) => value + 1);
    this.cart.update((value) => [...value, product]);
  }
}
