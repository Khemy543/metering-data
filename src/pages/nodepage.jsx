import React from 'react';
import { Form, Progress, } from 'antd';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import { Line } from 'react-chartjs-2';
import '../styles/nodepage.css';
import axios from 'axios';

const getNodeDetails = async (id) => {
  try {
        const res = await axios.get('https://project-backend-knust.herokuapp.com/nodeDetails/'+id)
    return res.data;

  } catch (error) {
  console.error(error)
  }
}

const getRates = async (id) => {
  try{
    const res = await axios.get('https://project-backend-knust.herokuapp.com/Flowrate/'+id)
    console.log(res.data);
    return res.data;

  }catch(error){
    console.error(error)
  }

  }
 

class nodepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data:  [
      ],
      labels: [],
      
      Owners_Name: "",
      Location: "",
      Mobile:"",
      Email:"",
      Address: ""
    }
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    LegendPosition: 'right'
  }

  render() {
    const chartData = {
      labels: this.state.labels,
      datasets: [
        {
          label: 'Nodes',
          data: this.state.data,

          backgroundColor: [
            'rgb(73, 60, 255)',
          ]
        }
      ]
    };
    return (
      <div className="node-body">
      <div>
       <Header />
        <Slider />
       </div>
           <div className="content">
            <div className="info">
              <div id="contact" style={{
                width: "480px",
                height: "230px",
                borderRight: "1px solid rgb(197, 197, 197)",
                marginTop: "10px",
                marginLeft: "30px"
              }}>
                <label>Owner's name </label>
                <h2 style={{ marginTop: "30px" }}>{this.state.Owners_Name}</h2>

                <label>Meter ID </label>
                <h2 style={{ marginTop: "30px" }}>{this.props.location.state.meterId}</h2>

                <label>Location </label>
                <h2 style={{ marginTop: "30px" }}>{this.state.Location} </h2>
              </div>

              <div id="contact" style={{ marginLeft: "40px", marginTop: "10px" }}>
                <label>Email</label>
                <h2 style={{ marginTop: "30px" }}>{this.state.Email}</h2>

                <label>mobile</label>
                <h2 style={{ marginTop: "30px" }}>{this.state.Mobile}</h2>

                <label>postal address </label>
                <h2 style={{ marginTop: "30px" }}>{this.state.Address}</h2>
              </div>

            </div>

            <div className="flow">
              <div id="progress" style={{
                width: "342px",
                height: "250px",
                border: "1px solid rgb(197, 197, 197)",
                backgroundColor: "white",
              }}>
                <Progress type="circle" style={{
                  marginLeft: "75px",
                  marginTop: "30px",

                }}
                percent={this.props.location.state.litres}
                format={percent => `${percent} Litres`}
                 width={180}
                />
              </div>


              <div id="progress" style={{
                width: "342px",
                height: "250px",
                border: "1px solid rgb(197, 197, 197)",
                backgroundColor: "white",

              }}>
                <Progress type="circle" style={{
                  marginLeft: "75px",
                  marginTop: "30px"
                }} 
                percent={this.props.location.state.flowRate}
                format={percent => `${percent} %`}
                width={180}
                />
              </div>

              <div id="progress" style={{
                width: "342px",
                height: "250px",
                border: "1px solid rgb(197, 197, 197)",
                backgroundColor: "white",

              }}>
                <Progress type="circle" style={{
                  marginLeft: "75px",
                  marginTop: "30px"
                }} 
                percent={50}
                format={percent => `${percent} Days`}
                width={180}


                />
              </div>

            </div>
            <div className="chart">

              <Line
                data={chartData}
                options={{
                  title: {
                    display: this.props.displayTitle,
                    
                    fontSize: 25
                  },
                  legend: {
                    display: this.props.displayLegend,
                    position: 'right'
                  }
                }}

              />
            </div>
            </div>
          </div>
        

      );
  }
  componentDidMount(){
    console.log(this.props.location.state)
    if (!this.props.location.state.meterId) {
      this.props.history.push('/homepage')
      return;
    }
    getNodeDetails(this.props.location.state.meterId).then(([data]) => this.setState({
      Owners_Name:data.Owners_Name,
      Location:data.Location, 
      Mobile:data.Mobile,
      Email:data.Email,
      Address:data.Address
      } ));

      getRates(this.props.location.state.meterId).then(res => {
        const data = res.map(item => item.Flowrate);
        const labels = res.map((_, index) => (index + 1).toString())
        this.setState({data, labels})
      })
      
   console.log(this.props.MeterID);
   
   }

}
export const Nodepage = Form.create()(nodepage);