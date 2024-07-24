import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce/layout';
import { CartService } from '@ecommerce/product-data-access';
import { ProductSearchComponent } from '@ecommerce/product-search';
import { CartComponent } from '@ecommerce/product-ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    CartComponent,
  ],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce';
  quantity = inject(CartService).quantity;

  funcao() {
    // eslint-disable-next-line no-console
    console.log('teste');
  }
}
