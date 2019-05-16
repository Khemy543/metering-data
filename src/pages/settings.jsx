import React from 'react';
import { Form } from 'antd';
import { Header } from '../components/header';
import { Slider } from '../components/slider';



class settings extends React.Component{
    render() {
      return(
        <div className="body">
           <Header/>
           <div className="content">
           <Slider/>
           </div>
        </div>
    );
   }
  }
export const  Settings = Form.create()(settings);