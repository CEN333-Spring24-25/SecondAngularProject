export class Patient{
    name: string; 
    height: number;
    weight: number;
    bloodpressure: string; 
    temp: number; 
    oxygenlevel: number;

    constructor( name: string, height: number,weight: number, bloodpressure: string, temp: number, oxygenlevel: number)
    {
        this.name = name;
        this.height = height; 
        this.weight = weight; 
        this.bloodpressure = bloodpressure;
        this.temp = temp; 
        this.oxygenlevel = oxygenlevel; 
    }
}