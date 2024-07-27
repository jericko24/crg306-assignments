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
        <main className='min-h-screen bg-gray-100'>
            <header className='bg-slate-600 text-white text-2xl font-bold py-4 px-6'>
                <h1>Shopping List</h1>
            </header>
            <div className="flex space-x-4">
                <div className="h-80 px-4 py-4 ">
                    <NewItem onAddItem={handleAddItem} />
                </div>
                <div className="h-90 px-4 py-4 overflow-auto">
                    <ItemList items={items} onItemSelect={handleItemSelect} />
                </div>
                <div className="h-90 px-4 py-4 overflow-auto">
                <MealIdeas ingredient={selectedItemName} />
                </div>
            </div>
        </main>
    );
}