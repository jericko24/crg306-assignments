"use client";

import { ItemList } from './item-list.js';
import { NewItem } from './new-item.js';
import itemsData from './items.json';
import { useState } from 'react';


export default function Page() {
    const [items, setItems] = useState(itemsData);

    const addItem = (newItem) =>{
        setItems([...items, newItem]);
    }

    return (
        <main className='text-2xl px-5 py-5 bg-slate-400'>
            <header className='font-bold border px-5 py-5 bg-slate-600'>
                <h1>Shopping List</h1>
            </header>
            <NewItem onAddItem={addItem}/>
            <ItemList items={items}/>
        </main>
    );
}