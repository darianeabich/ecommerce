import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Product } from 'modules/data-access/product/src/lib/models/product.model';

@Component({
  selector: 'ecommerce-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
}
