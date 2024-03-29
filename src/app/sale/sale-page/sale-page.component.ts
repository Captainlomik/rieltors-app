import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from "@angular/router";
import { Client, Flat, House, Land, Rieltor } from 'src/app/shared/interface';
import { AlertService } from 'src/app/shared/services/alert.service';
import { ClientService } from 'src/app/shared/services/client.service';
import { ObjectService } from 'src/app/shared/services/object.service';
import { OffersService } from 'src/app/shared/services/offers.service';
import { RieltorService } from 'src/app/shared/services/rieltor.service';


@Component({
  selector: 'app-sale-page',
  templateUrl: './sale-page.component.html',
  styleUrls: ['./sale-page.component.scss']
})
export class SalePageComponent implements OnInit {
  title = 'Продажа'
  clientForm: FormGroup
  objectForm: FormGroup
  tabs = ['Пользователь', 'Объект недвижимости', 'Предложение'];
  select = 0
  typeOfHousing: string = 'flat'
  clientId: number = 0
  objectId: number = 0
  addClientFlag: boolean = false
  addObjectFlag: boolean = false
  client: Client | undefined
  object: Flat | House | Land | undefined
  rielters!: Rieltor[]
  clients!: Client[]

  selectedRieltor: any
  selectedClient: Client | undefined
  price: number = 0


  constructor(private clientService: ClientService,
    private objectService: ObjectService,
    private rielterService: RieltorService,
    private offerService: OffersService,
    private alert: AlertService,
    private router: Router) {
    this.clientForm = new FormGroup({
      "FirstName": new FormControl<string>('', Validators.required),
      "MiddleName": new FormControl<string>('', Validators.required),
      "LastName": new FormControl<string>(''),
      "Phone": new FormControl(''),
      "Email": new FormControl('', [Validators.email, Validators.required]),
    })

    this.objectForm = new FormGroup({
      "city": new FormControl<string>('', Validators.required),
      "street": new FormControl<string>(''),
      "longitude": new FormControl<number>(0),
      "latitude": new FormControl<number>(0),
      "house": new FormControl<number>(0),
      "floor": new FormControl<number>(0),
      "floors": new FormControl<number>(0),
      "rooms": new FormControl<number>(0),
      "square": new FormControl<number>(0),
      "flat": new FormControl<number>(0),
      "frame": new FormControl<number>(0),
      "type": new FormControl('')
    })
  }

  ngOnInit(): void {
    this.getClient()
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
      this.objectService.get_byId(this.objectId).subscribe(
        el => { this.object = el }
      )
    }
    this.getRieltors()
  }

  addObject() {
    this.objectForm.controls['type'].setValue(this.typeOfHousing)
    this.objectService.post(this.objectForm.value).subscribe(
      el => {
        if (el) {
          this.objectId = el.id;
          this.addObjectFlag = true
          console.log(`объект ${this.objectId} добавлен`)
        }
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

  getClient() {
    this.clientService.get().subscribe(
      el => {
        this.clients = el;
      }
    )
  }

  createOffers() {
    this.offerService.post({
      clientId: this.clientId,
      objectId: this.objectId,
      rieltorId: this.selectedRieltor,
      price: this.price
    }).subscribe(
      el => {
        this.alert.success('Добавлено');
        this.router.navigate(["/clients"])
      }
    )
  }

  selected() {
    if (this.selectedClient) {
      this.addClientFlag = true
      this.clientId = this.selectedClient.id
      this.clientForm.setValue({
        FirstName: this.selectedClient.FirstName,
        MiddleName: this.selectedClient.MiddleName,
        LastName: this.selectedClient.LastName,
        Phone: this.selectedClient.Phone,
        Email: this.selectedClient.Email
      })
    }
  }

}
