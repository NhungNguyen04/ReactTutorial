//update function = A function passed as an argument to setState() usually
                // ex. setYear(arrow function)
                // Allow for safe updates based on the previous state
                // Used with multiple state updates and asynchronous functions
                // Good practice to use updater functions

import React, {useState} from 'react';

function MyComponent2() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFoods() {

        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood].sort((a, b) => a.localeCompare(b)));
    }

    function handleRemoveFoods(index) {

        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>List of Foods</h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => handleRemoveFoods(index)}>{food}</li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter food name' />
            <button onClick={handleAddFoods}>Add Food</button>
        </div>
    )
}

export default MyComponent2;