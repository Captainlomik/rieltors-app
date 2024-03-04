import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, filter, map, mergeMap, switchMap } from 'rxjs';
import { Client, Purchase, PurchaseObject, Rieltor, type } from 'src/app/shared/interface';
import { RieltorService } from 'src/app/shared/services/rieltor.service';
import { Location } from '@angular/common';
import { PurchaseService } from 'src/app/shared/services/purchase.service';
import { ClientService } from 'src/app/shared/services/client.service';
import { PurchaseObjectService } from 'src/app/shared/services/purchaseObject.service';

@Component({
  selector: 'app-rieltor-detail-page',
  templateUrl: './rieltor-detail-page.component.html',
  styleUrls: ['./rieltor-detail-page.component.scss']
})
export class RieltorDetailPageComponent implements OnInit {
  rieltor$!: Observable<Rieltor>
  param!: number
  purchase!: Purchase
  arrayClients: Client[] = []
  object!: PurchaseObject
  type = type


  constructor(private reiltorService: RieltorService,
    private route: ActivatedRoute,
    private location: Location,
    private purchaseService: PurchaseService,
    private clientService: ClientService,
    private purchaseObject: PurchaseObjectService) { }

  ngOnInit(): void {

    this.rieltor$ = this.route.params.pipe(switchMap((params: Params) => {
      this.param = params['id']
      return this.reiltorService.get_byId(params['id'])
    }))

    this.getPurchaseInfo()
  }
  
  goBack(): void {
    this.location.back();
  }

  getPurchaseInfo() {
    this.purchaseService.get().pipe(
      map(data => {
        return data.filter((purchase: Purchase) => {
          return +purchase.rieltorId === +this.param
        })
      }),
      mergeMap(res => {
        for (let i of res) {
          this.clientService.get_byId(i.clientId).subscribe(el => this.arrayClients.push(el))
          this.purchaseObject.get_byId(i.purchaseObjectId).subscribe(element => this.object = element)
        }
        return res
      }),
    ).subscribe(el => {
      this.purchase = el
    })
  }

}
