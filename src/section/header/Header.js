
import React, { useRef, useState } from "react";
import {product_image} from '../../constants/image';
import "./header_style.css";
import Slider_header from "./Slider_header";
const Header=()=>{
    return(
        <div>
            <nav className="navbar">
            </nav>     
            <div className="slider_wrapper">
                <div className="image_holder">
                    <img src={product_image[2]}></img>
                    
                </div>
                <div className="dark"></div>
                <div className="overlay ">hello kitty</div>
                

            </div>
            <div className="test"> hello</div>
        </div>
      
    )
}
export default Header;