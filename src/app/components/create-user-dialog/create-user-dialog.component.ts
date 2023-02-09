import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user-dialog',
  templateUrl: './create-user-dialog.component.html',
  styleUrls: ['./create-user-dialog.component.scss'],
})
export class CreateUserDialogComponent {
  public userFormGroup: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  save(): void {
    console.log(this.userFormGroup.value);
  }

  close(): void {}
}
