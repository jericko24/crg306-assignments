"use client";

export function Item ({name, quantity, category}) {
    return (
        <div>
            <li class= "text-base px-2 py-2">
                <span>{name}</span>
                <span>{quantity}</span>
                <span>{category}</span>
            </li>
        </div>
    );
} 