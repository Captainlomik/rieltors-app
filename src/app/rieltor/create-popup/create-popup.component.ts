import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Rieltor } from 'src/app/shared/interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { RieltorService } from 'src/app/shared/services/rieltor.service';

@Component({
  selector: 'app-create-popup',
  templateUrl: './create-popup.component.html',
  styleUrls: ['./create-popup.component.scss']
})
export class CreatePopupComponent {
  rieltorForm: FormGroup

  constructor(
    public ref: MatDialogRef<CreatePopupComponent>,
    private rieltorService: RieltorService,
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: Rieltor) {
    this.rieltorForm = new FormGroup({
      "FirstName": new FormControl<string>(''),
      "MiddleName": new FormControl<string>(''),
      "LastName": new FormControl<string>(''),
      "DealShare": new FormControl<number>(0, Validators.max(100))
    })
  }
  ngOnInit(): void {
    if (this.data) {
      this.rieltorForm.setValue({
        FirstName: this.data.FirstName,
        MiddleName: this.data.MiddleName,
        LastName: this.data.MiddleName,
        DealShare:this.data.DealShare
      })
    }

  }

  closepopup() {
    this.ref.close();
  }


  saveUser() {
    this.rieltorService.post(this.rieltorForm.value).subscribe({
      next: () => this.closepopup(), 
      complete: () => this.alert.success('Пользователь добавлен'),
      error: ()=> this.alert.danger('Пользователь не добавлен')

    })
  }

  editUser() {
    this.rieltorService.put(this.rieltorForm.value, this.data.id).subscribe({
      next: ()=> this.closepopup(),
      complete: () => {
        this.alert.success('Данные изменены')
      }
    })
  }
}
