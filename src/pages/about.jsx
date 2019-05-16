import React from 'react';
import { Form } from 'antd';
import { Header } from '../components/header';
import { Slider } from '../components/slider';



class about extends React.Component {
    render() {
        return (
            <div className="body">
                <Header />
                <div className="content"
                style={{
                    display:"block"
                }}
                >
                    <Slider />

                    <div className="text" style={{

                        
                        width: "1030px",
                        height: "570px",
                        marginLeft: "280px",
                        top: "110px",
                        position: "relative"
                    }}>
                        <h1 style={{marginLeft:"300px"}}> Remote Metering Data</h1>

                           
                        <p>GROUP MEMBERS</p>
                        <p> 1.	EMMANUEL OWUSU AFREYIE</p>
                        <p>2.	GIDEON ASSAFUAH</p>
                        <p> 3.	EDEM AHADZI</p>

                        <p>
                            Metering data is an electronic water meter that is used in monitoring meter readings.<br /> This device is supposed to increase efficiency in our water billing system. The device tackles a lot of challenges that we face in our existing water billing meters. <br />These challenges include; difficulty in monitoring meter readings in various houses, human errors when meter readings are manually entered into billing systems, <br />difficulty in monitoring the consumption levels and patterns among consumers and difficulty in calculating of bills.
            </p>

                    </div>
                    <div style={{
                        borderTop:"1px solid rgb(143, 142, 142)",
                        width:"1100px",
                        height:"80px",
                        marginLeft:"230px",
                    }}>
                    

                        </div>
                </div>
            </div>
        );
    }
}
export const About = Form.create()(about);