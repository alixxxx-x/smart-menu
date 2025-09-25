import React from 'react'
import './card.css'
import { IoAddOutline } from "react-icons/io5";
import Cofee from '../../assets/FOR Hack nslice/BEVERAGE/HOT DRINKS/Cofee.png'

const Card = () => {
  return (

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
    
  )
}

export default Card;
