import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../shared/services/client.service';
import { Observable, switchMap } from 'rxjs';
import { Client } from '../shared/interface';

@Component({
  selector: 'app-client-detail-page',
  templateUrl: './client-detail-page.component.html',
  styleUrls: ['./client-detail-page.component.scss']
})
export class ClientDetailPageComponent implements OnInit {
  id: any
  param!: number
  client$!: Observable<Client>

  constructor(private route: ActivatedRoute, private clientService: ClientService) { }
  ngOnInit(): void {
    this.client$ = this.route.params.pipe(switchMap((params:Params)=>{
      this.param = params['id']
      return this.clientService.get_byId(params['id'])
    }))

  }

}
