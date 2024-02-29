import { Pipe, PipeTransform } from "@angular/core";
import {  PurchaseObject } from "../interface";

@Pipe({
    name: 'searchPurchase'
})
export class SearchPurchasePipe implements PipeTransform {
    transform(purchases: PurchaseObject[] | null, search = ''): PurchaseObject[] {
        if (!purchases) return []

        if (!search.trim()) {
            return purchases
        }

        return purchases.filter(purchase=> {
            return purchase.area.toLowerCase().includes(search.toLowerCase()) 
        })
    }
}