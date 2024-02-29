import { Pipe, PipeTransform } from "@angular/core";
import { Client, Rieltor } from "../interface";

@Pipe({
    name: 'searchRieltor'
})
export class SearchRieltorPipe implements PipeTransform {
    transform(rieltors: Rieltor[] | null, search = ''): Rieltor[] {
        if (!rieltors) return []

        if (!search.trim()) {
            return rieltors
        }

        return rieltors.filter(rieltor => {
            return rieltor.LastName?.toLowerCase().includes(search.toLowerCase()) ||
                rieltor.FirstName?.toLowerCase().includes(search.toLowerCase()) ||
                rieltor.MiddleName?.toLowerCase().includes(search.toLowerCase())
        })
    }
}