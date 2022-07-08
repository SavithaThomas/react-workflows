
import Cardcomp from "../components/Cardcomp";
//import details from './data/deets';
//import '../styles/cardcompo.css'
import { Col, Row } from 'antd';
import data from "./data";

function createCard(emp:any)
{
  return <Cardcomp
  key={emp.id}
  title={emp.title} 
  description={emp.description} 
  content={emp.content} 
  />
}

function Cont()
{
    return(
    <div className='cardcompo'>
    <Row>        
        {data.map(createCard)}     
    
    </Row>
      </div>)
}

export default Cont;