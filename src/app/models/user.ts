import { StudentData } from "./students";
import { ProfessorData } from "./professors";

export class User {
    public username: string;
    public role: string;
    public studentData: StudentData;
    public professorData: ProfessorData;
}
