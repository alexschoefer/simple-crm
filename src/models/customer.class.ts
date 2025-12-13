export class Customer {
    customerNumber: number;
    customerName: string;
    adress: string;
    zipCode: string;
    location: string;
    country: string;
    goLive: number;


    constructor(obj?:any) {
        this.customerName = obj ? obj.name: '';
        this.customerNumber = obj ? obj.customerNumber: '';
        this.adress = obj ? obj.adress: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.location = obj ? obj.location: '';
        this.country = obj ? obj.country: '';
        this.goLive = obj ? obj.goLive: '';
    }
}