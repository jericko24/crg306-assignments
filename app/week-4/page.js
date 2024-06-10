import { NewItem } from "./new-item";

export default function Page() {
    return (
        <main className="bg-slate-400 py-4 text-center">
            <header className="text-2xl">
                <h1> Week 4 Assignment </h1>
            </header>
            <NewItem /> 
        </main>
    );
}