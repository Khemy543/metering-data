import React from 'react';
import { Form , Icon, Dropdown, Menu, Popconfirm, message}  from 'antd';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import '../styles/header.css';
import axios from 'axios';

const logout = async () => {
  try {
    const res = await
    axios.get('https://project-backend-knust.herokuapp.com/logout')
    return res.data;

  } catch (error) {
  console.error(error)
  }
}

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
  }

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}



const menu = (
  <Menu style={{ paddingTop:"40px"}}>
    <Menu.Item key="1">
    <Popconfirm title="Are you sure you want to logout?" onConfirm={logout()} onCancel={cancel} okText="Yes" cancelText="No">
    <Link to="/settings">Log Out</Link>
    </Popconfirm>
    </Menu.Item>
  </Menu>
);

class header extends React.Component {
 
  render() {
    return (
      <header className="header">
       
        <div id = "logo">
        
          <h1>METERING DATA</h1>
          <h3>Remote monitoring of metering data</h3>
                    
        </div>
       
        

        <div className="search">
          <input type="search" name="search" placeholder="  search" id="search" />
        </div>

        <div className="icons">
        <Link to="/registernode" style={{color:"#242424"}}>
        <Icon type="plus" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} />
        </Link>
        <Icon type="mail" style={{ paddingLeft: "20px", backgroundColor: "white", fontSize: "17px" }} />

        <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#" style={{color:"#242424"}}>
        <Icon type="user" style={{ paddingLeft: "20px",  fontSize: "17px" }} />
        </a>
  </Dropdown>
               
                 
        </div>

       
      </header>
    );
  }
}
export const Header = Form.create()(header);