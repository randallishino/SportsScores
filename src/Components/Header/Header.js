import React from "react"
import './Header.css'


const Header = () => (
    <header className='navbar'>
        <div className='navbar__title navbar__item'>SportsScores</div>
        <div className='navbar__item'><a href="#">NBA</a></div>
        <div className='navbar__item'><a href="#">MLB</a></div>
        <div className='navbar__item'> <a href="#">NFL</a></div>
        <div className='navbar__item'><a href="#">NHL</a></div>        
    </header>
);

export default Header