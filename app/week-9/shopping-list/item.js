"use client";

export function Item ({name, quantity, category, onSelect}) {
    return (
        <li 
            className="flex items-center justify-between bg-white border border-gray-300 rounded-md p-4 mb-2 shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-300"
            onClick={onSelect}
        >
            <div className="flex-1 text-lg font-semibold text-gray-800">
                {name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}
            </div>
            <div className="flex-1 text-gray-600 text-center">
                Quantity: {quantity}
            </div>
            <div className="flex-1 text-gray-600 text-center">
                Category: {category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}
            </div>
        </li>
    );
} 