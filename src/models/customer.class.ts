export class Customer {
    customerNumber: number;
    customerName: string;
    adress: string;
    zipCode: string;
    location: string;
    country: string;
    goLive: Date;
    logisticSector: string;
    logisticalTasks: string[];
    projectManager: string;
    projectStatus: string;


    constructor(obj?:any) {
        this.customerName = obj ? obj.name: '';
        this.customerNumber = obj ? obj.customerNumber: '';
        this.adress = obj ? obj.adress: '';
        this.zipCode = obj ? obj.zipCode: '';
        this.location = obj ? obj.location: '';
        this.country = obj ? obj.country: '';
        this.goLive = obj ? obj.goLive: '';
        this.logisticSector = obj ? obj.logisticSector: '';
        this.logisticalTasks = obj ? obj.logisticalTasks: [];
        this.projectManager = obj ? obj.projectManager: '';
        this.projectStatus = obj ? obj.projectStatus: ''
    }
}