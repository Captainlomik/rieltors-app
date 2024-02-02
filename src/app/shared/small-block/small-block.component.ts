import { Component, Input } from '@angular/core';
import { Client } from '../interface';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ClientService } from '../services/client.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-small-block',
  templateUrl: './small-block.component.html',
  styleUrls: ['./small-block.component.scss']
})
export class SmallBlockComponent {
  @Input() client: Client | undefined

  constructor(private dialog: MatDialog,
     public clientService: ClientService,
     public alert: AlertService ) { }

  ngOnInit() {
  } 

  openPopup() {
    this.dialog.open(PopupComponent, {
      data: this.client
    })
  }

  delPerson(client: Client) {
    this.clientService.delete(client.id).subscribe(el => {
      this.alert.warning('Пользователь удален')
    })
  }


}
