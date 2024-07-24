import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  // forma com OBSERVABLES
  // private cartSubject$ = new BehaviorSubject<Product[]>([]);
  // cart$ = this.cartSubject$.asObservable();
  // quantity$ = this.cart$.pipe(map((products) => products.length));

  // /**
  //  * @description Add products to cart
  //  * @param product
  //  */
  // addToCart(product: Product) {
  //   const currentCart = this.cartSubject$.getValue();
  //   this.cartSubject$.next([...currentCart, product]);
  // }

  // forma com SIGNALS
  private cartSignal = signal<Product[]>([]);
  cart = this.cartSignal.asReadonly();
  quantity = computed(() => this.cart().length);

  addToCart(product: Product): void {
    this.cartSignal.update((products) => [...products, product]);
  }

  getProducts(): Product[] {
    return this.cart();
  }
}
