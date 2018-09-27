
import { Class } from "./class";

export class Praxis{
	public candidates: String[];
    public students: String[];
    public _id: number;
    public versionName: string[];
    public university: string;
    public openInscriptionDate: string;
    public closeInscriptionDate: string;
    public initialDate: string;
    public endDate: string;
    public virtualSessionLink: string;
    public studentsCapacity: number;
    public classDays: string;
    public classTimeRange: string;
    public schedule: Class[];
}