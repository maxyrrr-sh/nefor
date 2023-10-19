import React from "react";
import logo from "../images/logo.png"
import banner from "../images/banner.png"
import Header from "./Header";
import Footer from "./Footer";
import homepageStyles from "../styles/Homepage.module.css"

function Homepage(){

return (
    <>
        <Header></Header>
        <div className={homepageStyles.logoBlock}>
            <img src={logo} alt="logo" className={homepageStyles.logo}/>
        </div>
        <div className={homepageStyles.searchBarContainer}>
            <input className={homepageStyles.searchBar} placeholder="search..."/>
        </div>
        <div className={homepageStyles.bannerContainer}>
            <img src={banner} alt="logo" className={homepageStyles.banner}/>
            <p className={homepageStyles.firstPhrase}>To be unconventional means not being</p>
            <p className={homepageStyles.firstPhrase2}>afraid of individuality.</p>
            <p className={homepageStyles.secondPhrase}>Creating chaos.</p>
        </div>
        <Footer></Footer>
    </>
)
}

export default Homepage
