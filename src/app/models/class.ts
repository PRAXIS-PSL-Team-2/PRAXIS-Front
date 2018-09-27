
import { Professor } from './professor';


export class Class{
    public _id:String;
    public classId: String;
    public topic: String;
    public modality: String;
    public date: Date;
    public hour: String;
    public professor:Professor;
    public resources: [{
        _id:String,
        type:String,
        resource:String;
    }];
    public homework: String;
    public studentData:{
        _id:String,
        grade:number,
        class_id: String,
        attendance: boolean|any;

    }
    
    public homeworks: [
        {
          _id:string,
             student: string,
             homework : string,
                type: string
        }
      ]
}