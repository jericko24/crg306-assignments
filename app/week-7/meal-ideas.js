"use client";

import { useState, useEffect } from 'react';

async function fetchMeals(ingredient) {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals;
    } catch (error) {
        console.error(error);
    }
}

export function MealIdeas({ ingredient}) {
    const [meals, setMeals] = useState([]);

    function loadMealIdeas() {
        
        fetchMeals(ingredient).then((meals) => {
            setMeals(meals || []);
        });
    }

    useEffect(() => {
        if (ingredient){
            loadMealIdeas();
        }
    }, [ingredient]);

    return (
    <div>
        <header className='font-bold border px-5 py-5 bg-slate-600'>
            <h1>Meal Ideas</h1>
        </header>
        <ul className='flex flex-wrap justify-center'>
            {meals.map((meal) => (
                <li key={meal.idMeal} className='p-5'>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    <h2>{meal.strMeal}</h2>
                </li>
            ))}
        </ul>
    </div>
    );
}