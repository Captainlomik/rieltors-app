import { Component, Input } from '@angular/core';
import { Flat, House, Land, type, ObjectType } from 'src/app/shared/interface';

@Component({
  selector: 'app-small-sale-block',
  templateUrl: './small-sale-block.component.html',
  styleUrls: ['./small-sale-block.component.scss']
})
export class SmallSaleBlockComponent {
  @Input() object: Flat | House | Land | undefined
  type = type


  delObject(id: number) { }

}


