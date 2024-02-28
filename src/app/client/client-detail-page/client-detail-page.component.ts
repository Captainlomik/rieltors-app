import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ClientService } from '../../shared/services/client.service';
import { Observable, map, mergeMap, switchMap } from 'rxjs';
import { Client, Object, Offer } from '../../shared/interface';
import { Location } from '@angular/common';
import { OffersService } from 'src/app/shared/services/offers.service';
import { ObjectService } from 'src/app/shared/services/object.service';

@Component({
  selector: 'app-client-detail-page',
  templateUrl: './client-detail-page.component.html',
  styleUrls: ['./client-detail-page.component.scss']
})
export class ClientDetailPageComponent implements OnInit {
  param!: number
  client$!: Observable<Client>
  offers: Offer[] | undefined
  arrayOffers: Object[] = []
  object!: Object

  constructor(private route: ActivatedRoute,
    private clientService: ClientService,
    private location: Location,
    private offerService: OffersService,
    private objectService: ObjectService) { }

  ngOnInit(): void {
    this.client$ = this.route.params.pipe(switchMap((params: Params) => {
      this.param = params['id']
      return this.clientService.get_byId(params['id'])
    }))

    this.getObject()

  }

  goBack(): void {
    this.location.back();
  }

  getObject() {
    this.offerService.get().pipe(
      map(data => {
        return data.filter((object: Offer) => {
          return +object.clientId === +this.param
        })
      }),
      mergeMap(res => {
        for (let i of res) {
          this.objectService.get_byId(i.objectId).subscribe(el => this.arrayOffers.push(el))
        }
        return res
      })
    ).subscribe()
  }



}
