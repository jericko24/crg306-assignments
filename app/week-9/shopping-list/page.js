"use client";

import { ItemList } from './item-list.js';
import { NewItem } from './new-item.js';
import { MealIdeas } from './meal-ideas.js';
import { useState, useEffect } from 'react';
import { useUserAuth } from '../_utils/auth-context.js';
import Link from 'next/link';
import {getItems, addItem} from '../_services/shopping-list-service.js';

export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState([]);
    const [selectedItemName, setSelectedItemName] = useState('');


    async function loadItems() {
        if(user){
            const fetchedItems = await getItems(user.uid);
            setItems(fetchedItems);
        }
    };

    useEffect(() => {
        loadItems();
    }, [user]);

    async function handleAddItem(newItem) {
        const newItemId = await addItem(user.uid, newItem);
        const newItems = [...items,{id: newItemId, ...newItem}];
        setItems(newItems);    
    };

    const handleItemSelect = (item) => {
        console.log("Selected item:", item);
        setSelectedItemName(item.name);
        console.log("Selected item name:", selectedItemName);
    }

    if (!user) {
        return (
            <div>
                <h1> Welcome Guest! </h1>
                <p> Please sign in to access the shopping list.</p>
                <Link href="http://localhost:3000/week-9" target="blank">Click here to sign in</Link>
            </div>
        );
    }

    return (
        <main className='text-2xl px-5 py-5 bg-slate-400'>
            <header className='font-bold border px-5 py-5 bg-slate-600'>
                <h1>Shopping List</h1>
            </header>
            <div className= "flex">
            <NewItem onAddItem={handleAddItem}/>
            <ItemList items={items} onItemSelect={handleItemSelect}/>
            <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>
    );
}