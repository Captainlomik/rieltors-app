import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { PurchaseObject } from 'src/app/shared/interface';
import { PurchaseObjectService } from 'src/app/shared/services/purchaseObject.service';

@Component({
  selector: 'app-purchase-list',
  templateUrl: './purchase-list.component.html',
  styleUrls: ['./purchase-list.component.scss']
})
export class PurchaseListComponent implements OnInit {
  title = 'Потребности объекты'
  purchases$: Observable<PurchaseObject[]> | undefined
  search = ''

  constructor(private purchaseObjectService: PurchaseObjectService, private dialog: MatDialog) {
  }
  ngOnInit(): void {
    this.getPurchase()
  }

  getPurchase() {
    this.purchases$ = this.purchaseObjectService.get()
  }

 
}

