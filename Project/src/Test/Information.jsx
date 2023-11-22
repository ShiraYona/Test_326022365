import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

export default function Information(){
    const [information,setInformation] = useState([])
    const [checked,setChecked] = useState(false)
    const data = useLocation();

useEffect(()=>{
    setInformation(data.state)
},[])    
return (
    <>
    {checked==false ?
    <>
    <h1> הכל </h1>
    <p>הצג פרשות שבוע בלבד</p><input type="checkBox" onChange={e=>{setChecked(e.target.checked)}}></input>
    {information.length>0 && information.map(item=>{
        return  <div key = {item.title} style = {{borderWidth:"8px",borderColor:"blue",borderStyle:"double"}}>
                <h1>{item.title}</h1><br></br>
                <h3>{`${item.description} תיאור`}</h3>
                <h3>{`${item.start} תאריך`}</h3>
                </div>
      })}
      </>
      :
      <>
      <h1>פרשות שבוע בלבד</h1>
      {information.length>0 && information.map(item=>{
        return item.className=== "parashat" && <div key = {item.title} style = {{borderWidth:"8px",borderColor:"blue",borderStyle:"double"}}>
                <h1>{item.title}</h1><br></br>
                <h3>{`${item.description} תיאור`}</h3>
                <h3>{`${item.start} תאריך`}</h3>
                </div>
      })}
      </> 
      }
      </>
)

}