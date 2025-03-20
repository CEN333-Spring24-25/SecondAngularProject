export class Patient{
    id: string;
    name: string; 
    height: number;
    weight: number;
    bloodpressure: string; 
    temp: number; 
    oxygenlevel: number;

    constructor( id: string, name: string, height: number,weight: number, bloodpressure: string, temp: number, oxygenlevel: number)
    {
        this.id = id; 
        this.name = name;
        this.height = height; 
        this.weight = weight; 
        this.bloodpressure = bloodpressure;
        this.temp = temp; 
        this.oxygenlevel = oxygenlevel; 
    }
}