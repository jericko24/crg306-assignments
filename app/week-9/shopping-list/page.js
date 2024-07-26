"use client";

import { ItemList } from './item-list.js';
import { NewItem } from './new-item.js';
import itemsData from './items.json';
import { MealIdeas } from './meal-ideas.js';
import { useState } from 'react';
import { useUserAuth } from '../_utils/auth-context.js';
import Link from 'next/link';

export default function Page() {
    const { user } = useUserAuth();

    if (!user) {
        return (
            <div>
                <h1> Welcome Guest! </h1>
                <p> Please sign in to access the shopping list.</p>
                <Link href="http://localhost:3000/week-8" target="blank">Click here to sign in</Link>
            </div>
        );
    }

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const addItem = (newItem) =>{
        setItems([...items, newItem]);
    }

    const handleItemSelect = (item) => {
        console.log("Selected item:", item);
        setSelectedItemName(item.name);
        console.log("Selected item name:", selectedItemName);
    }

    return (
        <main className='text-2xl px-5 py-5 bg-slate-400'>
            <header className='font-bold border px-5 py-5 bg-slate-600'>
                <h1>Shopping List</h1>
            </header>
            <div className= "flex">
            <NewItem onAddItem={addItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}