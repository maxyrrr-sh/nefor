import React from "react";
import headerStyles from "../styles/Header.module.css"
import { Link } from "react-router-dom";
import CartSVG from "../images/cart.svg"
import HeartSVG from "../images/Heart.svg"

function Header() {
    const isLoggedIn = localStorage.getItem('isLoggedIn')

    return (
        <>
            <nav className={headerStyles.navBar}>
                <select className={headerStyles.currency}>
                    <option className={headerStyles.option} value="HRN">HRN: ₴</option>
                    <option className={headerStyles.option} value="USD">USD: $</option>
                </select>
                <select className={headerStyles.language}>
                    <option className={headerStyles.option} value="UKR">UKR</option>
                    <option className={headerStyles.option} value="ENG">ENG</option>
                </select>
                <img src={HeartSVG} alt="heart.icon" className={headerStyles.heart}/>
                <img src={CartSVG} alt="cart.icon" className={headerStyles.cart}/>

                <div className={headerStyles.linkBlock}>
                    {isLoggedIn ? 
                        (<Link to="/profile" className={headerStyles.user}>Profile</Link>)
                    : 
                        (<Link to="/sign-up" className={headerStyles.user}>Sign Up</Link>
                    )}
                </div>
            </nav>
        </>
    )
}

export default Header
