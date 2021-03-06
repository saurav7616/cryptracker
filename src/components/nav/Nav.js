import React from "react";
import cryptocurrency from '../../assets/cryptocurrency.png'

const Nav=()=>{
    return(
        <nav className="ma0 pa0">
            <ul className="w-90 white list dib f4 ma0 pa0 flex items-center pt3 mh4">
                <li className="ma0 pa0"><img alt="logo" className="pl4 pt2 di grow" src={cryptocurrency} height="50px" width="50px"/></li>
                <li className="pl2 f2">CRYPTRACKER</li>
                <li className="pl4 pointer grow dim ml-auto dn">HOME</li>
                <li className="pl4 pointer grow dim dn">FAVOURITES</li>
            </ul>
            <ul className="white list dib w-90 flex justify-between mh5 mt5 pa0 pl3">
                <li className="pointer">#</li>
                <li className="pointer">Name</li>
                <li className="pointer pl4">Price</li>
                <li className="pointer">24h %</li>
                <li className="pointer pr2">Market Cap</li>
                <li className="pointer">Volume</li>        
                <li className="pointer pr3">Last 7 Days</li>    
            </ul>
        </nav>
    );
}   

export default Nav;