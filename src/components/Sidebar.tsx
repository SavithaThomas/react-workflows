import React from "react";
import "antd/dist/antd.css";
import { useState } from 'react';
import { Layout, Menu } from "antd";
import { Col, Row } from "antd";
import { Form,Input, Button,Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadChangeParam } from 'antd/es/upload';
import type { RcFile, UploadFile, UploadProps } from 'antd/es/upload/interface';

import "./Sidebar.css";
import Cardcomp from "../components/Cardcomp";
import Cont from "../components/Cardcreate";
import img1 from "../shapes/img1.svg";
import img2 from "../shapes/img2.svg";
import img3 from "../shapes/img3.png";
import img4 from "../shapes/img4.svg";
import img5 from "../shapes/img5.svg";
import img6 from "../shapes/img6.svg";
import img7 from "../shapes/img7.svg";
import img8 from "../shapes/img8.png";
import img9 from "../shapes/img9.svg";
import img10 from "../shapes/img10.png";
import { isNullOrUndefined } from "util";
import data from "./data";



//const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const { Search } = Input;
const { Header, Content, Sider } = Layout;
const { TextArea } = Input;

function Sidebar() {
  const [isModal, setIsModalVisible] = useState(false);
  // const [isMouse, setIsMouse] = useState(false);
  
  const [name, setName] = useState('');
   const [desig, setDesig] = useState('');
   const [details,setDetails]=useState('');
   const [img,setImage]=useState('');

   const handle = () => {

    let empdetails= JSON.parse(`${localStorage.getItem('empdetails') || '[]'}`);
    const empdata=Object.values(empdetails);    

    let payload: any ={
      id:empdata.length,
      name:name,
      designation:desig,
      det: details
    }
    let datain: any ={
      e_id:data.length,
      image:img,
      title:name,
      description:desig,
      content: details,
      details: "This workflow is to enable an empoyee raise his leave request and get it approved it from his reporting manager."
    }
    
    data.push(datain);
  
  
    empdetails.push(payload);
    localStorage.setItem('empdetails', JSON.stringify(empdetails));     
    setIsModalVisible(false);  

   };
   
  const showModal = () => {  
    setIsModalVisible(true);   
    };

    const handle2 = () => {  
      let empdetails= JSON.parse(`${localStorage.getItem('empdetails') || '[]'}`);

    
      };
      const handleCancel = () => {  
        setIsModalVisible(false);   
        };


      const getBase64 = (img: RcFile, callback: (url: string) => void) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result as string));
        reader.readAsDataURL(img);
      };
      
      const beforeUpload = (file: RcFile) => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
          message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
       if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
        };
        const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string>();

  const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'uploading') {
      setLoading(true);
      
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj as RcFile, url => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <div>
      <Layout> 
        <div className="sideb">
        <Sider className="SideBar">
          <div className="Logo">
            <img src={img1} alt=" "/>
          </div>
          <div className="mid">
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["4"]}
            className="midicon"
          >
            <Menu.Item>
              <img src={img2} alt=" " />
            </Menu.Item>
            <Menu.Item>
              <img src={img3} alt=" "/>
            </Menu.Item>
            <Menu.Item>
              <img src={img4} alt=" " className="midicon3" />
            </Menu.Item>
            <Menu.Item>
              <img src={img5} alt=" " />
            </Menu.Item>
            <Menu.Item>
              <img src={img6} alt=" " />
            </Menu.Item>
          </Menu>
          </div>
          <div className="boticon">
            <img src={img7} alt=" " />
            <img src={img8} alt=" "/>
            <img src={img9} alt=" " />
          </div>
        </Sider>
        </div>   
        <Layout>
          <Header>            
            <Row>             
              <Col span={6}>
                <p className="lefthead">Workflows</p>
              </Col>
              <Col span={5} className="midhead">
                <Input placeholder='Search' prefix={<SearchOutlined />}></Input>
              </Col>
              <Col span={6}  style={{
          marginLeft: '50px ',padding:'10px',        
        }}>
                <Button className="btn3"  type="primary" onClick={showModal}>Create Workflow</Button>
                <Modal  title="Setup Employee"  centered visible={isModal} footer={null}  >
                <Row>
                
                <Col span={6}>
                <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                                action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                beforeUpload={beforeUpload}
                                onChange={handleChange}
                                // (e:any) => setImage(e.target.file)
                                >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>           
              </Col>
              <Col span={8}>              
                <p className="popup">Employee Name</p>                                
                <p className="popup">Designation </p>                                
                <p className="popup">Employee Details</p>
                </Col>
                <Col span={10}>                   
                <Input className="text" id ="test1"  value={name} onChange={(e:any) => setName(e.target.value)}/>                    
                <Input className="text" id="test2"  value={desig} onChange={(e:any) => setDesig(e.target.value)} />
                <TextArea className="text1"
                                // value={value}
                                //  onChange={e => setValue(e.target.value)}
                                placeholder="Employee Details"
                                autoSize={{ minRows: 3, maxRows: 5 }}                                
                                onChange={(e:any)=>setDetails(e.target.value)} 
                                value={details}
                                
                            />
                {/* <textarea rows={4} cols={30} className="text1"   value="This space is for adding details of employee and other things you like to . Utilize the space and put something informative. I hope this will help you to understand more about the employee." /> */}
                
                </Col>     
        </Row> 
        <Row className="popupfoot">
        <Button type="primary"className="savebt" onClick={handle}>Save</Button>
        <Button className="cancelbt" onClick={handleCancel}>Cancel</Button>
          </Row>       
      </Modal>
              </Col>             
            </Row>           
          </Header>
          <Content
        style={{
          marginTop: '40px',padding:'20px', 
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: '10px',
            // margin: '10px',
            minHeight:'1000 px',
            marginTop:"-25px" ,
            marginRight:'0px',
            
          }}
        >
          <Cont/>
        </div>
      </Content>
         
          </Layout>
          </Layout>
    </div>
  );      
}
export default Sidebar;