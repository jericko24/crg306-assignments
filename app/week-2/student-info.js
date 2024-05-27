import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <h1>Student Information</h1>
        </main>
    );
}

export function StudentName() {
    return (
        <main>
            <h1>Name: Jericko Chavez</h1>
        </main>
    );
}
export function StudentGitHub() {
    return (
        <main>
            <Link href="https://github.com/jericko24">https://github.com/jericko24</Link>
        </main>
    );
}
