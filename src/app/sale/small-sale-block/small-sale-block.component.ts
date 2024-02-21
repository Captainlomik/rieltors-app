import { Component, Input } from '@angular/core';
import { Flat, House, Land } from 'src/app/shared/interface';

@Component({
  selector: 'app-small-sale-block',
  templateUrl: './small-sale-block.component.html',
  styleUrls: ['./small-sale-block.component.scss']
})
export class SmallSaleBlockComponent {
  @Input() object: Flat | House | Land | undefined

  openPopup() {

  }

  delObject(id: number) { }

}


