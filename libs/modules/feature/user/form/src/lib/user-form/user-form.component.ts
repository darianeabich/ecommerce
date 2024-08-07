/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, inject, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'ecommerce-user-form',
  standalone: true,

  imports: [
    CommonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss',
})
export class UserFormComponent {
  readonly dialogRef = inject(MatDialogRef<UserFormComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  form = new FormGroup({
    name: new FormControl('', {
      validators: [Validators.required],
      nonNullable: true,
    }),
    email: new FormControl('', {
      validators: [Validators.required, Validators.email],
      nonNullable: true,
    }),
    avatar: new FormControl('', {
      validators: [Validators.required],
    }),
    biography: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(500),
      ],
    }),
  });

  @ViewChild('fileInput') fileInput!: any;

  file: File | null = null;

  onClickFileInputButton(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onChangeFileInput(): void {
    const files: { [key: string]: File } = this.fileInput
      ? this.fileInput.nativeElement.files
      : '';
    this.file = files[0];
  }
}
