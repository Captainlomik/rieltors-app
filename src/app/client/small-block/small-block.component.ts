import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Client } from '../../shared/interface';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { ClientService } from '../../shared/services/client.service';
import { AlertService } from '../../shared/services/alert.service';

@Component({
  selector: 'app-small-block',
  templateUrl: './small-block.component.html',
  styleUrls: ['./small-block.component.scss']
})
export class SmallBlockComponent {
  @Input() client: Client | undefined
  @Output() updateClients = new EventEmitter()

  constructor(private dialog: MatDialog,
     public clientService: ClientService,
     public alert: AlertService ) { }


  openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: this.client
    })

    dialogRef.afterClosed().subscribe(
      () => {
        this.updateClients.emit()
      }
    )

  }

  delPerson(client: Client) {
    this.clientService.delete(client.id).subscribe(el => {
     this.updateClients.emit() 
     this.alert.warning('Пользователь удален')
    })
  }
  

}
