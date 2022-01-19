import React from "react";
import cryptocurrency from '../../assets/cryptocurrency.png'

const Nav=()=>{
    return(
        <nav className="ma0 pa0">
            <ul className="w-90 white list dib f4 ma0 pa0 flex items-center pt3 mh4">
                <li className="di ma0 pa0"><img alt="logo" className="pl4 pt2 di grow" src={cryptocurrency} height="50px" width="50px"/></li>
                <li className="di pl2 f2">CRYPTRACKER</li>
                <li className="di pl4 pointer grow dim ml-auto">HOME</li>
                <li className="di pl4 pointer grow dim">FAVOURITES</li>
            </ul>
            <ul className="white dib w-90 flex justify-between mh5 mt5 pa0 pl3">
                <li className="di pointer">#</li>
                <li className="di pointer">Name</li>
                <li className="di pointer pl4">Price</li>
                <li className="di pointer">24h %</li>
                <li className="di pointer pr2">Market Cap</li>
                <li className="di pointer">Volume</li>        
                <li className="di pointer pr3">Last 7 Days</li>    
            </ul>
        </nav>
    );
}   

export default Nav;