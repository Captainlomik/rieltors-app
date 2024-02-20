import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase, PurchaseObject } from 'src/app/shared/interface';
import { PurchaseObjectService } from 'src/app/shared/services/purchaseObject.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  title = 'Потребности объекты'
  purchases$: Observable<PurchaseObject[]> | undefined

  constructor(private purchaseObjectService: PurchaseObjectService) {
  }
  ngOnInit(): void {
    this.getPurchase()
  }

  getPurchase() {
    this.purchases$ = this.purchaseObjectService.get()
  }


}

