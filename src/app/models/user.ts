import { Student } from "./student";
import { Professor} from "./professor";

export class User {
    public username: string;
    public role: string;
    public studentData: Student;
    public professorData: Professor;
}
