"use client";

import { Item } from "./item.js";
import { useState } from "react";

export function ItemList({ items, onItemSelect }) {
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
        <div className="p-4 space-x-4">
            Sort By:
            <div className="mb-4 space-x-2 px-2">
                <button 
                onClick={() => setSortBy('name')}
                className={`px-4 py-2 rounded ${sortBy==='name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >Sort by Name</button>
            </div>
            <div className="mb-4 space-x-2">
                <button 
                onClick={() => setSortBy('category')}
                className={`px-4 py-2 rounded ${sortBy==='category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >Sort by Category</button>
            </div>
        </div>
        <div>
            <ul>
                {itemsArray.map((item) => (
                    item && <Item key={item.id} {...item} onSelect={()=> {
                        console.log("Item clicked:", item);
                        onItemSelect(item)
                    }}/>
                ))}
            </ul>
        </div>
    </>
    );
}
