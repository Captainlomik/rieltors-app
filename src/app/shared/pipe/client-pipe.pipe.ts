import { Pipe, PipeTransform } from '@angular/core';
import { Offer } from '../interface';

@Pipe({
  name: 'clientPipe'
})
export class ClientPipePipe implements PipeTransform {

  transform(offers: Offer[], index: number): unknown {
    return offers.filter(
      offer => {
        return offer.clientId === index
      }
    );
  }

}
