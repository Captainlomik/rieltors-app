import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/interface';
import { AlertService } from '../../shared/services/alert.service';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  clientForm: FormGroup

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    private clientService: ClientService,
    private alert: AlertService,
    @Inject(MAT_DIALOG_DATA) public data: Client,
) {
    this.clientForm = new FormGroup({
      "FirstName": new FormControl<string>(''),
      "MiddleName": new FormControl<string>(''),
      "LastName": new FormControl<string>(''),
      "Phone": new FormControl(''),
      "Email": new FormControl('', Validators.email),
    })
  }
  ngOnInit(): void {
    if (this.data) {
      this.clientForm.setValue({
        FirstName: this.data.FirstName,
        MiddleName: this.data.MiddleName,
        LastName: this.data.MiddleName,
        Phone: this.data.Phone,
        Email: this.data.Email
      })
    }

  }

  closepopup() {
    this.dialogRef.close();
  }


  saveUser() {
    this.clientService.post(this.clientForm.value).subscribe({
      next: () => this.closepopup(),
      complete: () => {
        this.alert.success('Пользователь добавлен')
      }

    })
  }

  editUser() {
    this.clientService.put(this.clientForm.value, this.data.id).subscribe({
      next: () => this.closepopup(),
    })
  }
}
