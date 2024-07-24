import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  CartService,
  ProductSearchService,
} from '@ecommerce/product-data-access';
import { ProductCardComponent } from '@ecommerce/product-ui';
import { switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { getParamsId } from './get-params';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [
    CommonModule,
    ProductCardComponent,
    QuantityDescriptionPipe,
    MatButtonModule,
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  // @Input() id!: string;
  productSearchService = inject(ProductSearchService);
  cartService = inject(CartService);

  product$ = getParamsId().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
