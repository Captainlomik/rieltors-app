import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ClientService } from '../../shared/services/client.service';
import { Client } from '../../shared/interface';
import { MatDialog} from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ClientsPageComponent implements OnInit {
  title = "Клиенты"
  clients$: Observable<Client[]> | undefined
  search = '';

  constructor(private clientService: ClientService, private dialog: MatDialog) { }

  ngOnInit() {
    this.clients$ = this.clientService.get()
  }

  openPopup() {
    this.dialog.open(PopupComponent, {
    })
  }

}
