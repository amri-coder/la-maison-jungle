import React from 'react'

const Categories = () => {
    return (
        <div>

            <label for="category">Choisir une catégorie</label>

            <select name="category" id="category">
                <option value="">--Veuillez choisir une option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>

        </div>
    )
}

export default Categories
