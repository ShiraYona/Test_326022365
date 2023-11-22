import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function YearBoard(){
const [start,setStart] = useState();
const [end,setEnd] = useState();
const navigate = useNavigate()

 const getData = async()=>{
    const response = await fetch(`https://www.hebcal.com/hebcal?cfg=fc&v=1&i=off&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`);
    const data = await response.json();
    debugger
    navigate("/information",{state:data})
 }
return(
    <>
    <h1>Select start date</h1>
    <input type="date"  onChange={(e) =>setStart(e.target.value)}/>
    <h1>Select end date</h1>
    <input type="date" onChange={(e) =>setEnd(e.target.value)}/><br></br>
     {start && end && <button onClick={()=>getData()}>See information</button>}
    </>
)
}