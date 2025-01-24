import React from 'react'
import "./Header.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
import { IoCartOutline } from 'react-icons/io5';
// import Counter from './Counter'
const Header = ({ cartCount }) => {

    const [hide, sethide] = useState(true);
    const unhide = () => {
        sethide(!hide)
        console.log(hide)
    }
    return (
        <><div className='burpar'>
            <div className='burger' onClick={unhide}>
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
            <div className="search"><input type="search" name="" id="" placeholder='Search Here' /></div>

        </div>
        <div className={`nav ${hide ? 'shownav' : 'hidenav'}`}>

                {/* <div className="logo">ADISHOP</div> */}
                <div className="logo">
                    <img src="../src/assets/EcomLogo.jpg" alt="" />
                </div>
                <div className="menu">
                    {/* <Counter /> */}
                    <ul>


                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/product'>Product</Link>
                        </li>
                        <li>
                            <Link to='/contact'>Contact</Link>

                        </li>
                        <li>
                            <Link to='/signin'>Signin</Link>

                        </li>

                        <li>
                            <Link to='/cart' className="cart-link">
                                <span className="cart-count">{cartCount}</span>
                                <IoCartOutline size={24} className="mr-2" />
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header
