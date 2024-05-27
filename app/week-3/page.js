import { ItemList } from './item-list.js';

export default function Page() {
    return (
        <main className='text-2xl px-5 py-5 bg-slate-400'>
            <header className='font-bold border px-5 py-5 bg-slate-600'>
                <h1>Shopping List</h1>
            </header>
            <ItemList/>
        </main>
    );
}