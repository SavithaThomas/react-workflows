
import Cardcomp from "../components/Cardcomp";
import { Col, Row } from 'antd';
import data from "./data";

function createCard(emp:any)
{
  return <Cardcomp
  key={emp.e_id}
  image={emp.image}
  title={emp.title} 
  description={emp.description} 
  content={emp.content} 
  details={emp.details}
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