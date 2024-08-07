"use client";

import { ItemList } from './item-list.js';
import { NewItem } from './new-item.js';
import itemsData from './items.json';
import { MealIdeas } from './meal-ideas.js';
import { useState } from 'react';

//TODO Debug creation of new items from items.json

export default function Page() {
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