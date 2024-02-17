import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Flat, House, Land, Offer } from "../interface";

@Injectable({
  providedIn: 'root'
})
export class OffersService extends BaseService<Offer> {

  protected override url?: string | undefined = 'offers'
}
