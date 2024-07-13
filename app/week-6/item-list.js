"use client";

import { Item } from "./item.js";
import { useState } from "react";

export function ItemList({ items }) {
    const [sortBy, setSortBy] = useState('name');
    
    const itemsArray = [...items].sort((a, b) => {
        if (sortBy === 'name') {
            return a.name.localeCompare(b.name);
        } else if (sortBy === 'category'){ 
            return a.category.localeCompare(b.category);
        }
        return 0;
    });

    return (
    <>
        <div className="p-4 flex space-x-4">
            <div className="mb-4 flex space-x-2">
                <button 
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded ${sortBy==='name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >Sort by Name</button>
            </div>
            <div className="mb-4 flex space-x-2">
                <button 
                onClick={() => setSortBy('category')}
                className={`px-4 py-2 rounded ${sortBy==='category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >Sort by Category</button>
            </div>
        </div>
        <div>
            <ul>
            {itemsArray.map((item) => (
            item && <Item key={item.id} {...item} />
            ))}
            </ul>
        </div>
    </>
    );
}
