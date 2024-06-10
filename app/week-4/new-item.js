"use client";
import { useState } from "react";

export function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("Produce");
    
    const handleSubmit = (event) => {
        event.preventDefault();

        if(name === "") {
            alert("Name cannot be empty.");
            return;
        }

        const newItem = {
            name,
            quantity,
            category,
        };
        console.log(newItem);

        alert(`Name: ${name}, Quantity: ${quantity}, Category: ${category} has been added to the list.`);

        setName("");
        setQuantity(1);
        setCategory("Produce");
    }

    return (
        <main class="flex flex-col items-center justify-center min-h-screen">
            <div>
                <div class="flex flex-col items-center bg-slate-600 p-8 rounded-lg w-full max-w-md">
                    <form class="flex flex-col space-y-4">
                        <div>
                            <label>
                                <input required type="text" value={name} onChange={(event) => setName(event.target.value)}
                                className="input-field bg-white text-black border border-gray-300 rounded-md p-2 mt-1 w-full"
                                placeholder="Input Name"/>
                            </label>
                        </div>
                        <div>
                            <label>
                                Quantity:
                                <input required type="number" min={1} max={99} value={quantity} onChange={(event) => setQuantity(event.target.value)}
                                className="number-field bg-white text-black border border-gray-300 rounded-md p-2 mt-1 w-full"
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                Category:
                                <select required value={category} onChange={(event) => setCategory(event.target.value)}
                                className="number-field bg-white text-black border border-gray-300 rounded-md p-2 mt-1 w-full">
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
                            <button onClick={handleSubmit}
                            className="button bg-slate-300 text-black border border-gray-300 rounded-md p-2 mt-1 w-full hover:bg-white">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}


