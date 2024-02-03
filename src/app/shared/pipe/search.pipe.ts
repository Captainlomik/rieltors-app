import { Pipe, PipeTransform } from "@angular/core";
import { Client } from "../interface";

@Pipe({
    name: 'searchPeople'
})
export class SearchPipe implements PipeTransform {
    transform(clients: Client[] | null, search = ''): Client[] {
        if (!clients) return []

        if (!search.trim()) {
            return clients
        }

        return clients.filter(client => {
            return client.LastName?.toLowerCase().includes(search.toLowerCase()) ||
                client.FirstName?.toLowerCase().includes(search.toLowerCase()) ||
                client.MiddleName?.toLowerCase().includes(search.toLowerCase()) ||
                client.Email?.toLowerCase().includes(search.toLowerCase())
        })
    }
}