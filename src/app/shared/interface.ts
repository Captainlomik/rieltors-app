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
    latitude: number
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
    square: number
}

export interface Offer {
    id?: number,
    clientId: number,
    objectId: number,
    rieltorId: number,
    price: number
}