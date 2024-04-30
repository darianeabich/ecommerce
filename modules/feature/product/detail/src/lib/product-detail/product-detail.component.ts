import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ProductSearchService } from '@ecommerce/product-data-access';
import { switchMap } from 'rxjs';
import { getParamsId } from './get-params';

@Component({
  selector: 'ecommerce-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  // @Input() id!: string;
  productSearchService = inject(ProductSearchService);

  products$ = getParamsId().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
