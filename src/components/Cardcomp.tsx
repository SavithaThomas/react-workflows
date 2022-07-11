import { Card,Avatar } from 'antd';
import './Card.css';
import { Col, Row } from "antd";
import { useState } from 'react';
import { Layout,Menu} from "antd";
import { Input, Button} from "antd";


import img2 from "../shapes/img2.svg";
// import { AnyPtrRecord } from 'dns';
const { Content } = Layout;

function Cardcomp(props:any) {

  const [isActive, setIsActive] = useState(true);
  // const [isMouse, setIsMouse] = useState(false);
 
  const handleClickcard = () => {  
    setIsActive(isActive => !isActive);   
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
        <Button  className="btn4">View Details</Button>     
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