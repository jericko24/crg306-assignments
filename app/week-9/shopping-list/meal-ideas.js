"use client";

import { useState, useEffect } from 'react';

async function fetchMeals(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch (error) {
        console.error("Could not fetch meals", error);
        return [];
    }
}

export function MealIdeas({ingredient}) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function loadMealIdeas() {
            try {
                const fetchedMeals = await fetchMeals(ingredient);
                console.log("Fetched meals", fetchedMeals);
                setMeals(fetchedMeals || []);
            } catch (error) {
                console.error("Could not load meal ideas", error);
                setMeals([]);
            }    
        }

        if (ingredient){
            loadMealIdeas();
        } else {
            setMeals([]);
        }

    }, [ingredient]);

    return (
        <div className="flex flex-col items-center w-full max-w-md mx-auto bg-white shadow-md rounded-lg p-4">
            <header className="bg-slate-600 text-white text-xl font-bold py-2 px-4 rounded-t-lg">
                <h1>Meal Ideas</h1>
            </header>
            <ul className="flex flex-wrap justify-center mt-4">
                {meals.length > 0 ? (
                    meals.map((meal) => (
                        <li key={meal.idMeal} className='p-5'>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />
                            <h2 className="text-lg font-semibold text-center">{meal.strMeal}</h2>
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-600">No meal ideas found.</p>
                )}
            </ul>
        </div>
    );
}