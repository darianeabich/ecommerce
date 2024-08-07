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
  selector: 'ecommerce-user-biography-dialog',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatButtonModule,
  ],
  templateUrl: './user-biography-dialog.component.html',
  styleUrl: './user-biography-dialog.component.scss',
})
export class UserBiographyDialogComponent {
  readonly dialogRef = inject(MatDialogRef<UserBiographyDialogComponent>);
  readonly data = inject<User>(MAT_DIALOG_DATA);
  readonly user = this.data;
}
