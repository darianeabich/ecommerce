import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutModule } from './../../../../libs/modules/feature/layout/src/lib/layout.module';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, LayoutModule],
  selector: 'ecommerce-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce-admin';
}
