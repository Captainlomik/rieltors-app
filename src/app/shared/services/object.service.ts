import { Injectable } from "@angular/core";
import { BaseService } from "./base.service";
import { Flat, FlatClass, House, HouseClass, Land, LandClass, Object } from "../interface";
import { Observable, map } from "rxjs";
import { environment } from "src/environment";

@Injectable({
  providedIn: 'root'
})
export class ObjectService extends BaseService<FlatClass | HouseClass | LandClass | undefined> {

  protected override url?: string | undefined = 'objects'

  override get_byId(id: number): Observable<FlatClass | HouseClass | LandClass | undefined> {
    const data = this.http.get(`${environment.url}/${this.url}/${id}/`)
    return data.pipe(map(el => {
      let obj = el as Object
      switch (obj.type) {      
        case 'Land':
          let data = el as Land
          return new LandClass(
            data['square'],
            data['id'],
            data['type'],
            data['city'],
            data['street'],
            data['longitude'],
            data['latitude']
          )
        case 'House':
          let house = el as House
          return new HouseClass(
            house['house'],
            house['floors'],
            house['rooms'],
            house['square'],
            house['id'],
            house['type'],
            house['city'],
            house['street'],
            house['longitude'],
            house['latitude'],
          )

        case 'Flat':
          let flat = el as Flat
          return new FlatClass(
            flat['house'],
            flat['frame'],
            flat['flat'],
            flat['floor'],
            flat['rooms'],
            flat['square'],
            flat['id'],
            flat['type'],
            flat['city'],
            flat['street'],
            flat['longitude'],
            flat['latitude'],
          )
        default: return undefined
      }
    }))
  }

}
