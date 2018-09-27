import { User } from "./user";

export class Class{
    public topic: string;
    public modality: string;
    public date: Date;
    public hour: string;
    public professor: User;
    public resources: [string,string];
}