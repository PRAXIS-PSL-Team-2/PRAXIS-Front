export class Students {
    public _id: number;
    public username: string;
    public email: string;
    public role: string;
    public studentData: StudentData;
  }

  export class StudentData {
    public name: string;
    public lastName: string;
    public phone: string;
    public university: string;
    public goal: string;
    public selfDescription: string;
    public video: string;
    public praxisVersion: string;
  }