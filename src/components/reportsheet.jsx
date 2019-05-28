import React from 'react';
import { Form } from 'antd';
import '../styles/report.css'



class reportsheet extends React.Component {
  render() {
    return (
      <div className="sheet">

        <table width="100%">
          <tr>
            <th rowSpan="3">Node Information</th>
            <td>Node Name :   2122</td>
          </tr>
          <tr>
            <td>Location:   Adum</td>
          </tr>
          <tr>
            <td>Customer:   Dr.E. Keelson</td>
          </tr>


          <tr>
            <th rowSpan="2">Water Usage</th>
            <td>Total Usage(ltrs) :   500</td>
          </tr>
          <tr>
            <td>Flow Rate(ltrs/sec) :   600</td>
          </tr>

          <tr>
            <th rowSpan="4">Bills</th>
            <td>Current Bill :   600</td>
          </tr>
          <tr>
            <td>Owing :   500</td>
          </tr>
          <tr>
            <td>Additonal Charges:  30</td>
          </tr>
          <tr>
            <td style={{ backgroundColor: "rgb(197, 197, 197)", color: "black" }}>Total:   5000</td>
          </tr>

        </table>



      </div>

    );
  }
}
export const Reportsheet = Form.create()(reportsheet);