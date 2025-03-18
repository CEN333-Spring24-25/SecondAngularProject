export class Patient{
    phone: string;
    name: string; 
    height: number;
    weight: number;
    bloodpressure: string; 
    temp: number; 
    oxygenlevel: number;

    constructor( phone: string, name: string, height: number,weight: number, bloodpressure: string, temp: number, oxygenlevel: number)
    {
        this.phone = phone; 
        this.name = name;
        this.height = height; 
        this.weight = weight; 
        this.bloodpressure = bloodpressure;
        this.temp = temp; 
        this.oxygenlevel = oxygenlevel; 
    }
}