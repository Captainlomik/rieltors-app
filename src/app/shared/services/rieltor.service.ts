import { Injectable } from '@angular/core';
import { BaseService } from './base.service';
import { Rieltor } from '../interface';

@Injectable({
  providedIn: 'root'
})
export class RieltorService extends BaseService<Rieltor> {

  protected override url?: string | undefined = 'rieltor'
}
