/* eslint-disable @typescript-eslint/no-explicit-any */
import { CommonModule } from '@angular/common';
import { Component, inject, OnInit, ViewChild } from '@angular/core';
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
export class UserFormComponent implements OnInit {
  readonly dialogRef = inject(MatDialogRef<UserFormComponent>);
  readonly data = inject(MAT_DIALOG_DATA);

  user = this.data.user;

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

  // file: File | null = null;
  file: string = '';

  ngOnInit(): void {
    if (this.user) {
      this.form.patchValue(this.user);
      this.file = this.user.avatar;
      // this.fileInput = this.user.avatar;
    }
  }
  onClickFileInputButton(): void {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  }

  onChangeFileInput(event: any): void {
    // const files: { [key: string]: File } = this.fileInput
    //   ? this.fileInput.nativeElement.files
    //   : '';
    // this.file = files[0];

    const files = event.target.files as FileList;

    if (files.length > 0) {
      const _file = URL.createObjectURL(files[0]);
      this.file = _file;
      this.resetInput();
    }
  }

  resetInput() {
    const input = document.getElementById(
      'avatar-input-file'
    ) as HTMLInputElement;
    if (input) {
      input.value = '';
    }
  }
}
