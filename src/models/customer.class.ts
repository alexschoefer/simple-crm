export class Customer {
    name: string;

    constructor(obj?:any) {
        this.name = obj ? obj.name: '';
    }
}