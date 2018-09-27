import { StudentData } from "./student";
import { ProfessorData } from "./professor";

export class User {
    public username: string;
    public role: string;
    public studentData: StudentData;
    public professorData: ProfessorData;
}
