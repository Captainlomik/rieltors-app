import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Purchase } from "../interface";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseService<Purchase> {

  protected override url?: string | undefined = 'purchases'
}
