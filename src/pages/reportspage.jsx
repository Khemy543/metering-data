import React from 'react';
import { Form, Icon , DatePicker, Select , Button} from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import { Reportsheet } from '../components/reportsheet';
import ReactToPrint from "react-to-print";
import '../styles/report.css';
import axios from 'axios';


async function post(url, data) {
	try {
		const res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(data)
		});
		const resdata = await res.json();
		return resdata;
	} catch (error) {
		return error;
	}
}


const {  RangePicker } = DatePicker;



const Option = Select.Option;

 

class report extends React.Component {

  constructor() {
		super();
		this.state = {
           Meter_ID:"",
           time1: "",
           time2: "",
           meterids: [],
           time1 : "",
           time2 : "",
           selectedID:"Meter ID",
            };
    }

    handleChange(value) {
      console.log(value);
      //this.setState({ selectedID : value});
      
      
   }


   onChange(date, dateString) {
    console.log(date.map(d => d.toString()),dateString.map(ds => ds.toString()));
  }


  componentDidMount( ) {
    axios.get('https://project-backend-knust.herokuapp.com/Meter')
.then(response => {
  //console.log(response.data);
  let meterIds = response.data;
  this.setState({meterids: meterIds})
  })
  .catch(error => {
    console.log(error);
});
}



onSubmit = e => {
  e.persist();
  e.preventDefault();
  console.log(e);
  const { Meter_ID : Meter_ID, time1 : time1,time2 : time2}= this.state;
  
  var config = {
      headers:{
        'Content-Type' : 'application/json'
      }
  };

  
  axios.post('https://project-backend-knust.herokuapp.com/getBillings/'+this.state.selectedID+'/'+this.state.time1+'/'+this.state.time2, {
          Meter_ID,time1,time2
  }).then(res => {
          if(res.status===200){
              alert("biiinb");
             
          }
          else
          alert("Error");
          console.log(res);
  }).catch(console.log);


};
// componentDidMount( ){
//   axios.post('https://project-backend-knust.herokuapp.com/getBillings/'+this.state.selectedID+'/'+this.state.time1+'/'+this.state.time2)
//   .then(response => {
    
//     console.log(response.data);
//   })
// } 

  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <Slider />
          <div id = "reportsheet">
          <Reportsheet ref={el => (this.componentRef = el)} />
          </div>

          <div id="generator" onSubmit={this.onSubmit}>
              
          <div id = "selector">
          <Select defaultValue = {this.state.selectedID} style={{ width: 120 }} onChange={this.handleChange}>
            {this.state.meterids.map((item) => <Option key = {item.Meter_ID} value={item.Meter_ID}>{item.Meter_ID}</Option>)}
             </Select>
         
          </div>
            

            <RangePicker 
            onChange={this.onChange} 
            id ="date"
            selected = {this.state.startDate}
            />

            <Button id = "btn" onClick={this.onSumit} >Generate</Button>
           
            <div>
            <ReactToPrint
            trigger={() => <Link to="#" style={{ left: "850px", position: "relative", top: "-46px", listStyle: "none"}}><Button type="primary" style={{height:"30px", width:"60px" , cursor:"pointer"}}>Print</Button></Link>}
            content={() => this.componentRef}
          />
          </div>
          </div>
        </div>

      </div>
    )
  };
}
export const Report = Form.create()(report);


// '/getBillings/'+this.state.selectedID+'/'+this.state.time1+'/'+this