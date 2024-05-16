import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductSearchService } from '@ecommerce/product-data-access';
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
}
