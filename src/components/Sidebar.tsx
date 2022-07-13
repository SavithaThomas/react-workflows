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


//const style: React.CSSProperties = { background: "#0092ff", padding: "8px 0" };
const { Search } = Input;
const { Header, Content, Sider } = Layout;

function Sidebar() {
  const [isModal, setIsModalVisible] = useState(false);
  // const [isMouse, setIsMouse] = useState(false);
 
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
                <Modal title="Setup Employee"  centered visible={isModal} okType  ="default"  onOk={handleOk}  onCancel={handleCancel} okText="Cancel" cancelText="Save" >
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
                                >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>           
              </Col>
              <Col span={8}>
              
                <p>Employee Name</p>
                                
                <p>Designation </p>
                                
                <p>Employee Details</p>

                </Col>
                <Col span={10}>             
                
                <Input className="text" id ="test1" value= "Krushi. M"/>               
                
                <Input className="text" value="SDE 1" id="test2" />
              <textarea rows={4} cols={30} className="text1"   value="This space is for adding details of employee and other things you like to . Utilize the space and put something informative. I hope this will help you to understand more about the employee." />
                

                </Col>

              {/* <textarea rows={4} cols={30}  className="text1"   value="This space is for adding details of employee and other things you like to . Utilize the space and put something informative. I hope this will help you to understand more about the employee." /> */}
                
               
                {/* <Form>
                <Form.Item label="Employee Name">
                <Input className="text" value= "Krushi. M"/>
                </Form.Item>
                <Form.Item label="Designation   :">
                <Input className="text" value="SDE 1" />
                </Form.Item>
                <Form.Item label="Employee Details">
              <textarea rows={4} cols={30}  className="text1"   value="This space is for adding details of employee and other things you like to . Utilize the space and put something informative. I hope this will help you to understand more about the employee." />
                </Form.Item>
                </Form> */}
              {/* <input name="Employee Name"></input>
        <p>Some contents...</p>
        <p>Some contents...</p> */}
      
        </Row>
        
      </Modal>
              </Col>             
            </Row>           
          </Header>
          <Content
        style={{
          marginTop: '40px',padding:'30px', 
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: '10px',
            margin: '10px',
            minHeight:'1000 px',
            marginTop:"-25px" 
            
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