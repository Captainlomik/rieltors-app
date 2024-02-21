import { ChangeDetectionStrategy, Component, OnChanges, OnInit } from '@angular/core';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/interface';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss'],
})
export class ClientsPageComponent implements OnInit {
  title = "Клиенты"
  clients$: Observable<Client[]> | undefined
  search = '';

  constructor(private clientService: ClientService, private dialog: MatDialog) { }

  ngOnInit() {
    this.getClients()

  }

  getClients() {
    return this.clients$ = this.clientService.get()
  }

  openPopup() {
    const dialogRef = this.dialog.open(PopupComponent, {
    });

    dialogRef.afterClosed().subscribe(
      () => {
        this.getClients()
      }
    )
  }

}
