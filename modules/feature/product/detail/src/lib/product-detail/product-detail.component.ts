import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
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

  id$ = getParamsId();
}
