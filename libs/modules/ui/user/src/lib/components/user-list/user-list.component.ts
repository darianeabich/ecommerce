import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'ecommerce-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss',
})
export class UserListComponent {
  displayedColumns: string[] = ['id', 'name', 'email'];
  dataSource = [
    { id: 1, name: 'Hydrogen', email: 'hydrogen@email.com' },
    { id: 2, name: 'Helium', email: 'helium@email.com' },
    { id: 3, name: 'Lithium', email: 'lithium@email.com' },
  ];
}
