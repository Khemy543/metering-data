import React from 'react';
import { Form } from 'antd';
import { CircularProgressBar } from '../components/circularProgress';
import 'react-circular-progressbar/dist/styles.css';
import '../styles/node.css';


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
    this.props.history.push('/nodepage', { meterId: this.props.MeterID, flowRate: this.props.flowRate, litres: this.props.litres })
  }

  render() {
    return (
      <div>

        <div className="node" onClick={this.onDetailView}>
          <h3 class="text-center" style={{ margin: "5px 10px", fontSize: "12px", color: "rgba(36, 35, 35, 0.3)" }}>Meter ID   <h4 style={{ fontSize: "20px" }}> {this.props.MeterID}</h4> </h3>
          <div class="text-center" id="app">
            <CircularProgressBar
              strokeWidth="5"
              sqSize="200"
              percentage={this.props.flowRate} />

          </div>
        </div>

      </div>
    );
  }
}

export const Node = Form.create()(node);