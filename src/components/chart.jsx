import React, { Component } from 'react';
import { Bar, Line, Pie } from 'react-chartjs-2';
import { Form } from 'antd';
import axios from 'axios';




class chart extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            chartData: {}
        }
    }

    componentDidMount() {
        axios.get('https://project-backend-knust.herokuapp.com/nodeFL')
            .then(response => {
                const chartItems = response.data;
                console.log(chartItems);
                let meterIDs = [];
                let liters = [];
                chartItems.forEach(element => {
                    meterIDs.push(element.Meter_ID);
                    liters.push(element.Liters);
                });
                this.setState({
                    chartData: {
                        labels: meterIDs,
                        datasets: [
                            {
                                label: 'Litres',
                                data: liters,

                                backgroundColor: [
                                    '#151719',
                                    '#ff0000',
                                    '#3002f8',
                                    '#00fc4c'


                                ]
                            }
                        ]
                    }
                });
            });


    }





    static defaultProps = {
        displayTitle: true,
        displayLegend: true,
        LegendPosition: 'right'
    }
    render() {
        return (
            <div className="chart">
                <Bar
                    style={{
                        width: "500px",
                        height: "800px"
                    }}
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: this.props.displayTitle,
                            text: 'Liters / Meter ID',
                            fontSize: 25
                        },
                        legend: {
                            display: this.props.displayLegend,
                            position: 'right'
                        }
                    }}

                />

            </div>
        );
    }
}


export const Chart = Form.create()(chart);