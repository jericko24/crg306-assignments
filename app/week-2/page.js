import StudentInfo from "./student-info.js";
import { StudentName, StudentGitHub } from "./student-info.js";

export default function Page() {
    return (
        <main>
            <header>
                <StudentInfo/>
            </header>
            <StudentName/>
            <StudentGitHub/>
        </main>
    );
}