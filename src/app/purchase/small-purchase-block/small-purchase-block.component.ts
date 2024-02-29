import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PurchaseObject } from 'src/app/shared/interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PurchaseObjectService } from 'src/app/shared/services/purchaseObject.service';

@Component({
  selector: 'app-small-purchase-block',
  templateUrl: './small-purchase-block.component.html',
  styleUrls: ['./small-purchase-block.component.scss']
})

export class SmallPurchaseBlockComponent implements OnInit {

  @Input() purchase: PurchaseObject | undefined
  @Output() updatePurchase = new EventEmitter()
  type = {
    'flat': 'Квартира',
    'house': 'Дом',
    'land': 'Земля'
  }
  answer: string = ''

  constructor(private purchaseService: PurchaseObjectService,
    private alert: AlertService) { }

  ngOnInit(): void {
    this.answer = this.type[this.purchase!.type]
  }


  delPurchase(id: number) {
    this.purchaseService.delete(id).subscribe(
      () => {
        this.updatePurchase.emit()
        this.alert.success('Пользователь удален')
      })
  }


}
