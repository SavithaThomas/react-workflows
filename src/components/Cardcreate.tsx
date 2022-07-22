
import Cardcomp from "../components/Cardcomp";
import { Col, Row } from 'antd';
import data from "./data";
import { useState,useEffect } from 'react';

const initialValue=[{id:0,name:"Anoosha",desig:"SDE1"}];
  // const [cards,setCards]=useState([]);


// const Cont = () => {



function Cont()
 {
  const initialValue=[{key:0,title:"Anoosha",description:"SDE1"}];
  const [cards,setCards]=useState([]);
  
  const [loading,setLoading]=useState(false);
  let empdetails= JSON.parse(`${localStorage.getItem('empdetails') || '[]'}`);
       
 

  useEffect(() => {
    let empdetails= JSON.parse(`${(localStorage.getItem('empdetails')) || '[]'}`);
    setCards(empdetails);
    setLoading(false);            
  }, [loading]); 

  const refresh = ()=>{
    setLoading(true);  
  }
  
function createCard(emp:any)
{
  return <Cardcomp
  key={emp.id}
  image={emp.image}
  title={emp.name} 
  description={emp.designation} 
  content={emp.det} 
  details={emp.det}
  refresh={refresh}
  />
}
  
    return(
    <div className='cardcompo'>
    <Row>        
        {cards.map((item)=>createCard(item))}         
    </Row>
      </div>)
}

export default Cont;