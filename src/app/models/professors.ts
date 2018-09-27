export class Professors {
    public _id: number;
    public username: string;
    public email: string;
    public role: string;
    public profesorData: ProfessorData;
  }

  export class ProfessorData{
    public _id: number;
    public name: string;
    public lastName: string;
    public specialty: string;
    public selfDescription: string;
  }