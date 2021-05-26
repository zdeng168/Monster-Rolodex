import React from 'react'
import './card.styles.css'

export const Card = (props) => (
    <div  >
    <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set1&size=180x180`}/>
    <h2 className='card-container'>{props.monster.name}</h2>

    <p> {props.monster.email}</p>

    </div>
);
