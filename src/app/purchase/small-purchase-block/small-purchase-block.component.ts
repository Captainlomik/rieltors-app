import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PurchaseObject } from 'src/app/shared/interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { PurchaseService } from 'src/app/shared/services/purchase.service';
import { PurchaseObjectService } from 'src/app/shared/services/purchaseObject.service';

@Component({
  selector: 'app-small-purchase-block',
  templateUrl: './small-purchase-block.component.html',
  styleUrls: ['./small-purchase-block.component.scss']
})
export class SmallPurchaseBlockComponent {
  @Input() purchase: PurchaseObject | undefined
  @Output() updatePurchase = new EventEmitter()


  constructor(private purchaseService: PurchaseObjectService,
    private alert: AlertService) { }

  openPopup() {
    // const dialogRef = this.dialog.open(PopupComponent, {
    //   data: this.client
    // })

    // dialogRef.afterClosed().subscribe(
    //   () => {
    //     this.updateClients.emit()
    //   }
    // )

  }

  delPurchase(id: number) {
    this.purchaseService.delete(id).subscribe(
      () => {
        this.updatePurchase.emit()
        this.alert.success('Пользователь удален')
      }
    )
  }



}
