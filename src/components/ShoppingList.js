import React from 'react'

const plantList =
    ['monstera', 'ficus lyrata', 'pothos arenté', 'yucca', 'palmier'];

function ShoppingList() {

    return (
        <ul>
            {plantList.map((plant) => (
                <li>{plant}</li>
            ))}
        </ul>
    )
}

export default ShoppingList;
