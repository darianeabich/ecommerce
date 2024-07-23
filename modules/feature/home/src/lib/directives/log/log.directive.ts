import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from '@ecommerce/product-ui';

@Directive({
  selector: '[ecommerceLog]',
  standalone: true,
})
export class LogDirective implements OnInit {
  // exemplo de input
  // @Input() id = '';

  // exemplo de output
  // @Output() doubleClick = new EventEmitter<void>();

  // exemplo de injeção do componente
  productCardComponent = inject(ProductCardComponent);

  // exemplo com ElementRef
  elementRef = inject(ElementRef);

  // exemplo com Renderer
  renderer = inject(Renderer2);

  router = inject(Router);

  @HostListener('click', ['$event'])
  onClick(): void {
    //    this.router.navigate(['/product', this.id]);
    console.log('element Ref', this.elementRef.nativeElement);
    this.router.navigate(['/product', this.productCardComponent.product.id]);
  }

  // @HostListener('dblclick', ['$event'])
  // onDoubleClick(): void {
  //   this.doubleClick.emit();
  // }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }
}
