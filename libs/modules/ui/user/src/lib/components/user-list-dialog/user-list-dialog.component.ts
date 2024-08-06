import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { User } from '@ecommerce/user-data-access';

@Component({
  selector: 'ecommerce-user-list-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './user-list-dialog.component.html',
  styleUrl: './user-list-dialog.component.scss',
})
export class UserListDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UserListDialogComponent>);
  readonly data = inject<User>(MAT_DIALOG_DATA);
  readonly user = this.data;
}
