import React from 'react';
import ProptTypes from 'prop-types'
import './Cards.css'

const Card = ({lang, img, fcolor,scolor}) => {
    return (
        <div className='card'style={{
            background:`linear-gradient(to left, ${fcolor}, ${scolor}`
        }}>
            <img src={img} alt='lang.svg'></img>
            <h3>{lang}</h3>
            
        </div>
    );
}

console.log(ProptTypes)

Card.ProptTypes ={
    lang: ProptTypes.string,
    img: ProptTypes.string,
    fcolor: ProptTypes.string,
    scolor: ProptTypes.string

}

export default Card;
