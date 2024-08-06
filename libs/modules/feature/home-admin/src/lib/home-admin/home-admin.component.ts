import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { UserListComponent } from '@ecommerce/user-list';

@Component({
  selector: 'ecommerce-home-admin',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.scss',
})
export class HomeAdminComponent {}
