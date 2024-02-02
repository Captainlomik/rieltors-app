import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ClientService } from '../services/client.service';
import { Client } from '../interface';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss'],
})
export class PopupComponent implements OnInit {
  clientForm: FormGroup

  constructor(
    private ref: MatDialogRef<PopupComponent>,
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) public data: Client) {
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
    this.ref.close('Closed using function');
  }


  Saveuser() {
    this.clientService.post(this.clientForm.value).subscribe(
      res => this.closepopup()
    )
  }

  editUser() {
    this.clientService.put(this.clientForm.value, this.data.id).subscribe({
      next: el => console.log(el),
      complete: () => this.closepopup()
    })
  }
}
