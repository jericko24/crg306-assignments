"use client";
import { useState } from "react";


export function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");


    const randomIdGenerator = () => {
        const char = 'abcedefghijABCDEFGHI0123456789';
        let randomId = '';
        for (let i = 0;i < 18; i++) {
            randomId += char.charAt(Math.floor(Math.random() * char.length));
        }
        return randomId;
    };
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if(name === "") {
            alert("Name cannot be empty.");
            return;
        }

        const newItem = { id:randomIdGenerator(), name, quantity, category };
        onAddItem(newItem); 
        console.log(newItem);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category} has been added to the list.`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    return (
        <div className="flex justify-center items-center w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
            <form className="flex flex-col space-y-4 w-full" onSubmit={handleSubmit}>
                <div>
                    <label>
                        <input required type="text" value={name} onChange={(event) => setName(event.target.value)}
                        className="bg-white text-black border border-gray-300 rounded-md p-2 w-full"
                        placeholder="Input Name"/>
                    </label>
                </div>
                <div>
                    <label>
                        Quantity:
                        <input required type="number" min={1} max={99} value={quantity} onChange={(event) => setQuantity(event.target.value)}
                        className="bg-white text-black border border-gray-300 rounded-md p-2 w-full"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Category:
                        <select required value={category} onChange={(event) => setCategory(event.target.value)}
                        className="bg-white text-black border border-gray-300 rounded-md p-2 w-full">
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
                </div>
                <div>
                    <button type="submit" onSubmit={handleSubmit}
                    className="bg-blue-500 text-white border border-gray-300 rounded-md p-2 w-full hover:bg-blue-600">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}


