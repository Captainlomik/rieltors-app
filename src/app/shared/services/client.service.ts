import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Client } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends BaseService<Client> {

  protected override url?: string | undefined = 'clients'
}
