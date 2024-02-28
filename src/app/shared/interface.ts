export interface Client {
    id: number,
    FirstName?: string,
    MiddleName?: string,
    LastName?: string,
    Phone?: string,
    Email?: string
}

export interface Rieltor {
    id: number,
    FirstName?: string,
    MiddleName?: string,
    LastName?: string,
    DealShare?: number
}

export interface Object {
    id: number,
    city: string,
    street: string,
    longitude: number,
    latitude: number,
    type: string
    getValues: () => objectValues[]
}

export interface House extends Object {
    house: number,
    floors: number,
    rooms: number,
    square: number
   

}

export interface Flat extends Object {
    house: number,
    frame: number,
    flat: number,
    floor: number,
    rooms: number,
    square: number
}
export interface Land extends Object {
    square: number,
}

export class HouseClass implements House {
    constructor(public house: number,
        public floors: number,
        public rooms: number,
        public square: number,
        public id: number,
        public type: string,
        public city: string,
        public street: string,
        public longitude: number,
        public latitude: number) {
    }
    getValues(): objectValues[] {
        return [
            { name: 'Дом', value: this.house },
            { name: 'Кол-во комнат', value: this.rooms },
            { name: 'Кол-во этажей', value: this.floors },
            { name: 'Площадь', value: this.square }]
    }
}

export class FlatClass implements Flat {
    constructor(
        public house: number,
        public frame: number,
        public flat: number,
        public floor: number,
        public rooms: number,
        public square: number,
        public id: number,
        public type: string,
        public city: string,
        public street: string,
        public longitude: number,
        public latitude: number) { }

    getValues(): objectValues[] {
        return [
            { name: 'что-то', value: this.frame },
            { name: 'Квартира', value: this.flat },
            { name: 'Этаж', value: this.floor },
            { name: 'Комнаты', value: this.rooms },
            { name: 'Площадь', value: this.square },
        ]
    }
}

export class LandClass implements Land {
    constructor(public square: number,
        public id: number,
        public type: string,
        public city: string,
        public street: string,
        public longitude: number,
        public latitude: number) { }
    getValues(): objectValues[] {
        return [{ name: 'Площадь', value: this.square }]
    }

}

export type objectValues = {
    name: string;
    value: any;
}

export interface Offer {
    id?: number,
    clientId: number,
    objectId: number,
    rieltorId: number,
    price: number
}

export interface PurchaseObject {
    id: number,
    type: ObjectType,
    area: string,
    squareMin: number,
    squareMax: number,
    roomsMin?: number,
    roomsMax?: number,
    floorMin?: number,
    floorMax?: number,
}

export type ObjectType = 'flat' | 'house' | 'land'

export interface Purchase {
    clientId: number,
    purchaseObjectId: number,
    rieltorId: number,
    priceMin: number,
    priceMax: number
}

