import React from 'react';
import { Form, Icon , DatePicker, Select , Button} from 'antd';
import { Link } from 'react-router-dom';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import { Reportsheet } from '../components/reportsheet';
import ReactToPrint from "react-to-print";
import '../styles/report.css';


const {  RangePicker } = DatePicker;

function onChange(date, dateString) {
  console.log(date, dateString);
}

const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

class report extends React.Component {

  render() {
    return (
      <div className="main">
        <Header />
        <div className="content">
          <Slider />
          <div id = "reportsheet">
          <Reportsheet ref={el => (this.componentRef = el)} />
          </div>

          <div id="generator">
              
          <div id = "selector">
          <Select defaultValue="All Nodes" style={{ width: 120 }} onChange={handleChange}>
            <Option value="Node 1">Node 1</Option>
            <Option value="Node 2">Node 2</Option>
            <Option value="Node 3">Node 3</Option>
            <Option value="Node 4">Node 4</Option>
          </Select>
         
          </div>
            

            <RangePicker onChange={onChange} id ="date"/>

            <Button id = "btn">Generate</Button>
            <div>
            <ReactToPrint
            trigger={() => <Link to="#" style={{ left: "850px", position: "relative", top: "-46px", listStyle: "none"}}><input type="button" value="Print" style={{height:"30px", width:"60px" , cursor:"pointer", color:"#575656"}} /></Link>}
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