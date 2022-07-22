import { Card,Avatar } from 'antd';
import './Card.css';
import { Col, Row } from "antd";
import { useState , useEffect } from 'react';
import { Layout,Menu} from "antd";
import { Input, Button} from "antd";
import { Modal } from "antd";
import data from "./data";


import img2 from "../shapes/img2.svg";
import { isTemplateSpan } from 'typescript';
// import { AnyPtrRecord } from 'dns';
const { Content } = Layout;
const { TextArea } = Input;


function Cardcomp(props:any) {

  const [isActive, setIsActive] = useState(true);
  // const [isMouse, setIsMouse] = useState(false);
  const [name, setName] = useState(props.title);
   const [desig, setDesig] = useState('');
   const [details,setDetails]=useState('');

   
  const handleClickcard = () => {  
    setIsActive(isActive => !isActive);   
    };

   const [isModal, setIsModalVisible] = useState(false);   
   const handleEdit = () => {
    
    console.log('props',props?.title);     
    let empdetails= JSON.parse(`${(localStorage.getItem('empdetails')) || '[]'}`);    
      for(const item of empdetails) {
      if (item.name==props.title) {        
      item.designation=desig;
      item.det=details;
    }
    }
       
    // const result:any =empd.find((item:any) => item.name == props?.title);
    // console.log('result',result);
    // const id:any=result.id;
    
    // let x:any =localStorage.key(id);
    // localStorage.removeItem(x);
    // empdetails= JSON.parse(`${(localStorage.getItem('empdetails')) || '[]'}`);
    // console.log(empdetails);
    // let payload: any ={
    //   id:result.id,
    //   name:result.name,
    //   designation:desig,
    //   det: details
    // }    
    //  empdetails.push(payload);
    localStorage.setItem('empdetails', JSON.stringify(empdetails));   
    
    setIsModalVisible(false); 
     props.refresh();       
    //setLoading(true);
   };     
  
  const showModal = () => {  
    setIsModalVisible(true);   
    };

    const handleOk = () => {  
      setIsModalVisible(false);   
      
      // console.log(document.getElementById('test1').Value)
      };
      const handleCancel = () => {  
        setIsModalVisible(false);   
        };
    
return (

<Content style={{ margin: "24px 16px 0" }}>
<Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
  <Col className="gutter-row" span={6}>
  <Card style={{ width: 300, height: 160 }} className="card1">
    <div className={isActive?"site-card-border-less-wrapper":"hoverdis"} onMouseEnter={handleClickcard}  onClick={handleClickcard} >
      
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
      </div>
    <div className={isActive?"hoverdis":"site-card-border-less-wrapper"} onMouseLeave={handleClickcard}  onClick={handleClickcard}>
        <Row>
        <Col span={24}>
        <h3 className="card2">{props.details}</h3>
        <div className="bright">        
        <Button  className="btn4" onClick={showModal}>View Details</Button>     
        <Modal   className='viewmodel' centered visible={isModal} footer={null}>
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
                <p className="popup">Employee Name</p>                                
                <p className="popup">Designation </p>                                
                <p className="popup">Employee Details</p>
                </Col>
                <Col span={10}>                   
                <Input className="text" id ="test1"  placeholder={props.title} onChange={(e:any) => setName(e.target.value)}/>                    
                <Input className="text" id="test2"  placeholder={props.description} onChange={(e:any) => setDesig(e.target.value)} />
                <TextArea className="text1"
                                // value={value}
                                //  onChange={e => setValue(e.target.value)}
                                placeholder={props.details}
                                autoSize={{ minRows: 3, maxRows: 5 }}
                                
                                onChange={(e:any)=>setDetails(e.target.value)} 
                            />
               
                
                </Col>       
                 


           </Row> 
        <Row className="popupfoot">
        <Button type="primary"className="savebt" onClick={handleEdit} >Edit</Button>
        <Button className="cancelbt" onClick={handleCancel}>Cancel</Button>
          </Row>       
        
      </Modal>
        </div>   
      </Col>
      </Row>
    
    </div>
    </Card>

    </Col>
    </Row>
   
  </Content>
);
}

export default Cardcomp;