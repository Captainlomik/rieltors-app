import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Flat, House, Land } from "../interface";

@Injectable({
  providedIn: 'root'
})
export class ObjectService extends BaseService<Flat | House | Land> {

  protected override url?: string | undefined = 'objects'
}
