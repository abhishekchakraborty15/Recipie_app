import "./navbar_style.css";
import { useState } from "react";
const Navbar=()=>{
    const [navbar,setnavbar]=useState(false);
const navbarchange=()=>{
    if(window.scrollY>=40){
        setnavbar(true)
    } else {
        setnavbar(false)
    }
}
window.addEventListener('scroll',navbarchange);

    return(
        <div  className={navbar ? 'navbar active' : 'navbar' }>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Calimeter</a></li>
                    <li><a href="">Contacts</a></li>

                </ul>
        </div>
    )
}
export default Navbar;