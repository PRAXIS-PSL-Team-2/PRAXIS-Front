import { Professor } from './professor';


export class Class{
    public topic: string;
    public modality: string;
    public date: Date;
    public hour: string;
    public professor:Professor;
    public resources: [string,string];
}