"use client";

export function Item ({name, quantity, category}) {
    return (
        <div>
            <li class= "text-base px-2 py-2 flex space-x-2">
                <span>{name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()}</span>
                <span>{quantity}</span>
                <span>{category.charAt(0).toUpperCase() + category.slice(1).toLowerCase()}</span>
            </li>
        </div>
    );
} 