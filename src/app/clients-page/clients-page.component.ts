import { Component, OnInit } from '@angular/core';
import { ClientService } from '../shared/services/client.service';
import { Client } from '../shared/interface';


@Component({
  selector: 'app-clients-page',
  templateUrl: './clients-page.component.html',
  styleUrls: ['./clients-page.component.scss']
})
export class ClientsPageComponent implements OnInit {
  title = "Клиенты"
  clients: Client[] = []

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.clientService.get().subscribe(el=> this.clients = el )
  }


}
