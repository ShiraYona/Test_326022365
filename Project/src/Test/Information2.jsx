import React, { useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

export default function Information2(){
    const [information,setInformation] = useState([]);
    const [checked,setChecked] = useState(false);
    const data = useLocation();
    
const setVisible = (item,bool)=>{
    let newArray=[...information]
    newArray.forEach(v=>{if(v.title === item.title)v.allDay=bool})
    setInformation(newArray);
}

useEffect(()=>{
    setInformation(data.state)
},[])    
return (
    <>
    {checked==false ? 
    <>
    <h1> הכל </h1>
    <p>הצג פרשות שבוע בלבד</p><input type="checkBox" onChange={e=>{setChecked(e.target.checked)}}></input>
    <br></br>
   
    {information.length>0 && information.map(item=>{
        return <div> 
                <Dialog visible={item.allDay} onHide={() =>{setVisible(item,false)}} key = {item.title} style = {{borderWidth:"8px",borderColor:"blue",borderStyle:"double"}}>
                <h1>{item.title}</h1><br></br>
                <h3>{`${item.description} תיאור`}</h3>
                <h3>{`${item.start} תאריך`}</h3>
                </Dialog>
                <Button  onClick={() => setVisible(item,true) } >{`Show ${item.title} again`}</Button>
               </div>
      })}
      </>
      :
      <>
      <h1>פרשות שבוע בלבד</h1>
      {information.length>0 && information.map((item)=>{
        return <div> 
                {item.className=== "parashat" && 
                <Dialog visible={item.allDay} onHide={() =>{setVisible(item,false)}} key = {item.title} style = {{borderWidth:"8px",borderColor:"blue",borderStyle:"double"}}>
                <h1>{item.title}</h1><br></br>
                <h3>{`${item.description} תיאור`}</h3>
                <h3>{`${item.start} תאריך`}</h3>
                </Dialog>}
                <Button  onClick={() => setVisible(item,true) } >{`Show ${item.title} again`}</Button>
                </div>  
      })}
      </> 
      }
      </>
)

}