import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss'],
})
export class CreateUserDialogComponent {
  public userFormGroup: FormGroup;
  constructor(
    public dialogRef: MatDialogRef<CreateUserDialogComponent>,
    private fb: FormBuilder
  ) {
    this.userFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  save(): void {
    this.dialogRef.close(this.userFormGroup.value);
  }

  close(): void {
    this.dialogRef.close();
  }
}
