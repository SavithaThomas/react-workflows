import { Card,Avatar } from 'antd';
import './Card.css';
import { Col, Row } from "antd";
import { useState } from 'react';
import { Layout,Menu} from "antd";
import { Input, Button} from "antd";
import { Modal } from "antd";


import img2 from "../shapes/img2.svg";
// import { AnyPtrRecord } from 'dns';
const { Content } = Layout;

function Cardcomp(props:any) {

  const [isActive, setIsActive] = useState(true);
  // const [isMouse, setIsMouse] = useState(false);
 
  const handleClickcard = () => {  
    setIsActive(isActive => !isActive);   
    };

    const [isModal, setIsModalVisible] = useState(false);
  // const [isMouse, setIsMouse] = useState(false);
  
  
   const handle = () => {
     
      setIsModalVisible(false);   
         };
  
  const showModal = () => {  
    setIsModalVisible(true);   
    };

    const handleOk = () => {  
      setIsModalVisible(false);   
      console.log("HEllo");
      // console.log(document.getElementById('test1').Value)
      };
      const handleCancel = () => {  
        setIsModalVisible(false);   
        };
    
return (

<Content style={{ margin: "24px 16px 0" }}>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col className="gutter-row" span={6}>
  {isActive && 
    <div className="site-card-border-less-wrapper" onMouseEnter={handleClickcard}  onClick={handleClickcard} >
      <Card style={{ width: 300, height: 160 }} className="card1">
        <Row>
          <Col span={6}>
            <img src={img2} className="cardImg" alt=" " />
          </Col>
          <Col span={18}>
            <h3 className="cardTitile">{props.title}</h3>
            <p className="cardPara">{props.description}</p>
            <p className="cardSpan">
              {props.content}
            </p>
          </Col>
        </Row>        
      </Card>
    </div>
}
{!isActive &&
    <div className="hoverdis" onClick={handleClickcard} onMouseLeave={handleClickcard} >
    <Card style={{ width: 300, height: 160 ,border:"2px solid lightblue"}} className="card1">
        <Row>
        <Col span={24}>
        <h3 className="card2">{props.details}</h3>
        <div className="bright">        
        <Button  className="btn4" onClick={showModal}>View Details</Button>     
        <Modal title="Setup Employee"   className='viewmodel' centered visible={isModal} footer={null}  >
                <Row>
                <Col span={6}>     
                <img src={img2} className="cardImg" alt=" " />                
              </Col>
              <Col span={18}>
            <h3 className="cardTitile">{props.title}</h3>
            <p className="cardPara">{props.description}</p>
            <p className="cardSpan">
              {props.content}
            </p>
            </Col>
            <Col span={6}>     
               
              </Col>
            <Col span={8}>              
                <p>Employee Name           
                </p>                              
                <p>Designation </p>                                
                <p>Employee Details</p>
                </Col>
                <Col span={10}>                   
                <Input className="text2" id ="test1" placeholder="Name" />                   
                <Input className="text2" id="test2" placeholder="Designation"  />
                <textarea rows={4} cols={30} className="text3"   value="This space is for adding details of employee and other things you like to . Utilize the space and put something informative. I hope this will help you to understand more about the employee." />
                
                </Col>   
          
             
        </Row> 
        <Row className="popupfoot">
        <Button type="primary"className="savebt" onClick={handle}>Save</Button>
        <Button className="cancelbt" onClick={handleCancel}>Cancel</Button>
          </Row>       
        
      </Modal>
        </div>   
      </Col>
      </Row>
    </Card>
    </div>
}
    </Col>
    </Row>
   
  </Content>
);
}

export default Cardcomp;