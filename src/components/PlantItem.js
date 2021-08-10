import React from 'react'
import CareScale from './CareScale';
import '../styles/PlantItem.css';

function handleClick(plantName) {
    alert(`Vous avez acheter 1 ${plantName} ? Très bon choix 🌱 ✨`);
}

function PlantItem({ name, cover, light, water }) {

    return (
        <li className='lmj-plant-item' onClick={() => handleClick}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
            {name}
            <div>
                <CareScale careType='water' scaleValue={water} />
                <CareScale careType='light' scaleValue={light} />
            </div>

        </li>
    )
}

export default PlantItem;
