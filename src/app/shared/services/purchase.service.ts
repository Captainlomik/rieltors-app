import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { PurchaseObject } from "../interface";

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends BaseService<PurchaseObject> {

  protected override url?: string | undefined = 'purchases/'
}
