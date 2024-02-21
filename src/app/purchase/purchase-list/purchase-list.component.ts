import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Purchase, PurchaseObject } from 'src/app/shared/interface';
import { PurchaseObjectService } from 'src/app/shared/services/purchaseObject.service';
import { PurchasePopupComponent } from '../purchase-popup/purchase-popup.component';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  title = 'Потребности объекты'
  purchases$: Observable<PurchaseObject[]> | undefined

  constructor(private purchaseObjectService: PurchaseObjectService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getPurchase()
  }

  getPurchase() {
    this.purchases$ = this.purchaseObjectService.get()
  }

  openPopup() {
   const dialogRef = this.dialog.open(PurchasePopupComponent, {
      // data: this.client
    })

    dialogRef.afterClosed().subscribe(
      () => {
        this.getPurchase()
      }
    )
  }

}

