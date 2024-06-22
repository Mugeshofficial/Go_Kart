import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header'>
        <img  className='header_logo' src= "http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
        <div className='header_search'>  
            <input className='header_searchinput' type='text'/>
            <span className="material-symbols-outlined header_searchIcon">search </span>
        </div>
        <div className="header_nav">
            <div className="header_option">
                <span className="header_optionLineOne">Hello</span>
                <span className="header_optionLineTwo">Sign in</span> 
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">Returns</span>
                <span className="header_optionLineTwo">& Orders</span> 
            </div>
            <div className="header_option">
                <span className="header_optionLineOne">Your</span>
                <span className="header_optionLineTwo">Prime</span> 
            </div>          
        </div>
        <div className="header_optionBasket">
            <span className="material-symbols-outlined">shopping_basket</span>
            <span className="header_optionLineTwo  header_basketCount">0</span>
        </div>
    </div>
        
    
  )
}

export default Header