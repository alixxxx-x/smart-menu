import React from 'react'
import './card.css'
import { IoAddOutline } from "react-icons/io5";
import Cofee from '../../assets/FOR Hack nslice/BEVERAGE/HOT DRINKS/Cofee.png'
import pizza_mushroom from '../../assets/FOR Hack nslice/Pizza/pizza_mushroom.png'

const Card = () => {
  return (
    <div className='menuContainer'>
      <article className='  productCard'>
            <div className='productCard-bg'></div>
            
            <img src={Cofee} alt='image' className='productCard-img'  ></img>
            <h3 className='productCard-title'>Coffee</h3>
            <span className='productCard-subtitle'>Hot Beverage</span>
            <h3 className='productCard-price'>150 da</h3>
            <button className='productCard-button'>
                <IoAddOutline />
            </button>

        </article>
        <article className='  productCard'>
            <div className='productCard-bg'></div>
            
            <img src={pizza_mushroom} alt='image' className='productCard-img'  ></img>
            <h3 className='productCard-title'>Mushroom Pizza</h3>
            <span className='productCard-subtitle'>Pizza</span>
            <h3 className='productCard-price'>350 DA</h3>
            <button className='productCard-button'>
                <IoAddOutline />
            </button>

        </article>
    </div>
  )
}

export default Card;
