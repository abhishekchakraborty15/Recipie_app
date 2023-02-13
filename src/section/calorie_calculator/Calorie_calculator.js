import React, { useEffect } from "react";
import { useState } from "react";
import "./calorie_calculator_style.css"
import fetchdata from "../../service/service.js";
const Calorie_calulator = (props)=>{
    useEffect(() => {
        clickhandler()
           },[]);
const [food,newfood]=useState("");
const [fooddata,newfooddata]=useState('');
    const changehandler = (event)=>{
        newfood(event.target.value)
        // console.log(food)
}

const clickhandler=()=>{
 fetchdata(food).then((response)=>{newfooddata(response)})
}
    return(
        <div className="Box">
            <div>
            <input placeholder="input food" onChange={changehandler}></input>
            <button onClick={clickhandler}>Search</button>
            </div>
            <div>
                <h2>Calorie Data</h2>
                <h2>Energy: {fooddata}</h2>
            </div>
        </div>
    );
}
export default Calorie_calulator;