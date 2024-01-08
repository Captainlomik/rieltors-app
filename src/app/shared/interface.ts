export interface Client{
    id:number, 
    FirstName?:string, 
    MiddleName?:string, 
    LastName?:string, 
    Phone?:string, 
    Email?:string
}

export interface Agent{
    id: number, 
    FirstName?: string, 
    MiddleName?:string, 
    LastName?:string, 
    DealShare?: number
}