import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Client, ObjectType, PurchaseObject, Rieltor } from 'src/app/shared/interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClientService } from 'src/app/shared/services/client.service';
import { ObjectService } from 'src/app/shared/services/object.service';
import { OffersService } from 'src/app/shared/services/offers.service';
import { PurchaseObjectService } from 'src/app/shared/services/purchaseObject.service';
import { RieltorService } from 'src/app/shared/services/rieltor.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss']
})
export class PurchaseComponent {
  title: string = 'Покупка'


  clientForm: FormGroup
  objectForm: FormGroup
  tabs = ['Пользователь', 'Объект недвижимости', 'Потребность'];
  select = 0
  typeOfHousing: ObjectType = 'flat'
  clientId: number = 0
  objectId: number | undefined = 0
  addClientFlag: boolean = false
  addObjectFlag: boolean = false
  client: Client | undefined
  object: PurchaseObject | undefined
  rielters: Rieltor[] | undefined

  selectedRieltor: any
  price: number = 0


  constructor(private clientService: ClientService,
    private purchaseObjectService: PurchaseObjectService,
    private rielterService: RieltorService,
    private alert: AlertService) {
    this.clientForm = new FormGroup({
      "FirstName": new FormControl<string>('', Validators.required),
      "MiddleName": new FormControl<string>('', Validators.required),
      "LastName": new FormControl<string>(''),
      "Phone": new FormControl(''),
      "Email": new FormControl('', [Validators.email, Validators.required]),
    })

    this.objectForm = new FormGroup({
      "area": new FormControl<string>(''),
      "squareMin": new FormControl<number | null>(null),
      "squareMax": new FormControl<number | null>(null),
      "roomsMin": new FormControl<number | null>(null),
      "roomsMax": new FormControl<number | null>(null),
      "floorMin": new FormControl<number | null>(null),
      "floorMax": new FormControl<number | null>(null),
    })
  }


  next(index: number) {
    this.select = index + 1
  }

  previous(index: number) {
    this.select = index - 1
  }

  addClient() {
    if (!this.addClientFlag && this.clientForm.valid) {
      this.clientService.post(this.clientForm.value).subscribe(
        (el) => {
          this.clientId = el.id;
          this.addClientFlag = true;
          console.log(`пользователь ${this.clientId} добавлен`)
        }
      )
    }
  }

  getInfo() {
    if (this.addClientFlag) {
      this.clientService.get_byId(this.clientId).subscribe(
        el => { this.client = el }
      )
    }
    if (this.addObjectFlag) {
      this.purchaseObjectService.get_byId(this.objectId!).subscribe(
        el => {this.object = el}
      )
    }
    this.getRieltors()
  }

  addPurchaseObject() {
    this.purchaseObjectService.post({
      id: undefined,
      type: this.typeOfHousing,
      area: this.objectForm.value.area,
      squareMin: this.objectForm.value.squareMin,
      squareMax: this.objectForm.value.squareMax,
      roomsMin: this.objectForm.value.roomsMin,
      roomsMax: this.objectForm.value.roomsMax,
      floorMin: this.objectForm.value.floorMin,
      floorMax: this.objectForm.value.floorMax,
    }
    ).subscribe(
      el => {
        this.objectId = el.id;
        this.addObjectFlag = true
        console.log(`объект ${this.objectId} добавлен`)
      }
    )
  }

  getRieltors() {
    this.rielterService.get().subscribe(
      el => {
        this.rielters = el

      }
    )
  }

  createOffers() {
    //   this.offerService.post({
    //     clientId: this.clientId,
    //     objectId: this.objectId,
    //     rieltorId: this.selectedRieltor,
    //     price: this.price
    //   }).subscribe(
    //     el => this.alert.success('Добавлено')
    //   )
  }
}
