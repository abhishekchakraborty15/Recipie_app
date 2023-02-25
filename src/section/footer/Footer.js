import React from "react";
import "./footer_style.css"
import { facebook_icon,instagram_icon,twitter_icon} from "../../assets/asset";
const Footer = () => {
    return (
        <div className="footer_wrapper">
            <div className=" footer1">
                Lorem ipsum, dolor sit amet consectetur adipisicing 
                elit. Autem accusantium 
                exercitationem quis nisi sequi! Consectetur.
            </div>
            <div className="footer2">
                <div className="footer2_contact">
                    <p>Email:anymail@gmail.com</p>
                    <p>Phone Number:+91 1234567891</p>
                    <p>Address:any place office address </p>
                    
                </div>
                <div className="footer2_icon">
                    <img src={facebook_icon}></img>
                    <img src={instagram_icon}></img>
                    <img src={twitter_icon}></img>
                </div>
            </div>
        </div>
    )
}
export default Footer;