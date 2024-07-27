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
        <div className="flex flex-col items-center w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
            <div className="w-full mb-4">
                <div className="flex items-center space-x-4">
                    <span className="font-bold text-slate-600">Sort By:</span>
                    <div className="flex space-x-2">
                        <button 
                        onClick={() => setSortBy('name')}
                        className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                        >Sort by Name</button>
                        <button 
                        onClick={() => setSortBy('category')}
                        className={`px-4 py-2 rounded ${sortBy==='category' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} hover:bg-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-300`}
                        >Sort by Category</button>
                    </div>
                </div>
            </div>
            <div>
                <ul className="w-full">
                    {itemsArray.map((item) => (
                        item && <Item key={item.id} {...item} onSelect={()=> {
                            console.log("Item clicked:", item);
                            onItemSelect(item)
                        }}/>
                    ))}
                </ul>
            </div>
        </div>
    </>
    );
}
