import React,{useState} from 'react'
import  input from 'semantic-ui-react'
import "./Home-header.scss";

const Homeheader=()=>{
const  [active, setactive] = useState('');
const text=["Home","Message","Friends"];

  return (
    <div className='main-header'>
    <div className="ui pointing menu">
    {text.map((value:any,index:any)=><a className={active===value?"active item":"item"} key={index} onClick={()=>setactive(value)}>{value} </a>)}
    <div className="right menu">
    </div>
  
    <a className={active==="Logout"?"active item":"item"} onClick={()=>setactive("Logout")}>Logout</a>
  </div>

  </div>
  )
}

export default Homeheader;