import React from "react";
import "antd/dist/antd.css";
import { Layout, Menu } from "antd";
import { Col, Row } from "antd";
import { Input, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
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
                <Button className="btn3" >Create Workflow</Button>
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