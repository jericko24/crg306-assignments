"use client";
import { useState } from "react";

export function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category} has been added to the list.`);
    }

    return (
        <main>
            <form>
                <label>
                    Name:
                    <input required type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </label>
                <label>
                    Quantity:
                    <input required type="number" value={quantity} onChange={(event) => setQuantity(event.target.value)} required />
                </label>
                <label>
                    Category:
                    <select value={category} onChange={(event) => setCategory(event.target.value)} required>
                        <option value="Produce">Produce</option>
                        <option value="Dairy">Dairy</option>
                        <option value="Bakery">Bakery</option>
                        <option value="Meat">Meat</option>
                        <option value="Frozen Foods">Frozen Foods</option>
                        <option value="Canned goods">Canned goods</option>
                        <option value="Dry goods">Dry goods</option>
                        <option value="Beverages">Beverages</option>
                        <option value="Snacks">Snacks</option>
                        <option value="Household">Household</option>
                        <option value="Other">Other</option>
                    </select>
                </label>
            </form>
            <button onClick={handleSubmit}>Submit</button>
        </main>
    );
}


