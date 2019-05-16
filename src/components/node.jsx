import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import { CircularProgressBar } from '../components/circularProgress';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/node.css';

// class node extends React.Component{
//     render() {
//       return(
//         <div className="node">
//               <div>

//               </div>
//         </div>
//     );
//    }
//   }
// export const  Node = Form.create()(node);




class node extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      percentage: {}
    };

    this.handleChangeEvent = this.handleChangeEvent.bind(this);
  }

  handleChangeEvent(event) {
    this.setState({
      percentage: event.target.value
    });
  }

  onDetailView = () => {
    this.props.history.push('/nodepage', {meterId: this.props.MeterID , flowRate: this.props.flowRate, litres:this.props.litres} )
  }

  render() {
    return (
      <div>
        {/* <Link to="/nodepage"> */}
      <div className="node" onClick={this.onDetailView}>
        <h3 class="text-center" style={{ margin: "5px 10px" , fontSize:"15px"}}>METER_ID :     {this.props.MeterID}</h3>
        <div class="text-center" id="app">
          <CircularProgressBar
            strokeWidth="5"
            sqSize="200"
            percentage={this.props.flowRate} />
           
        </div>
      </div>
      {/* </Link> */}
      </div>
    );
  }
}

export const Node = Form.create()(node);