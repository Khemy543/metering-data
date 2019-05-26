import React from 'react';
import { Form } from 'antd';
import { Header } from '../components/header';
import { Node } from '../components/node';
import { Slider } from '../components/slider';
import '../styles/homepage.css';
import axios from 'axios';



const getAllNodesFromServer = async () => {
  try {
    const res = await
    axios.get('https://project-backend-knust.herokuapp.com/nodeFL')
    return res.data;

  } catch (error) {
  console.error(error)
  }
}

class homepage extends React.Component {
  state = {
    nodes: []
    };

  render() {
    console.log(this.state)
    const newNodes = this.state.nodes.map(item => (
      
    <Node {...this.props} key={item.ID} flowRate={item.Flowrate} MeterID={item.Meter_ID} litres={item.Liters}/>
    
  ));

 

    return (
      <div className="home-body">
        <Header />
        <div className="main">
          <Slider />
          <div className="main-content">
            <React.Fragment>
              {newNodes}
            </React.Fragment>  
          </div>
        </div>
      </div> 
    );
  }

  componentDidMount(){
    getAllNodesFromServer()
    .then(data => this.setState({nodes:data ? data : []}))
   
   }

  
}
export const Homepage = Form.create()(homepage);