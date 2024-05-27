export function Item ({name, quantity, category}) {
return (
    <li class= "text-base px-2 py-2">
        <span>{name}</span>
        <span>{quantity}</span>
        <span>{category}</span>
    </li>
);
} 