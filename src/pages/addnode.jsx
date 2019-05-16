import React from 'react';
import { Form , Input , Select, Row, Col, Icon, Button}  from 'antd';
import { Header } from '../components/header';
import { Slider } from '../components/slider';
import '../styles/addnode.css'
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



class addnode extends React.Component {

    constructor() {
		super();
		this.state = {
            Owners_Name : "",
            Meter_ID : "",
            Location : "",
            Mobile : "",
            Email : "",
            Address : ""
            };
    }
    
    onChange = e => {
		e.persist();
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
    };
    
    onSubmit = e => {
		e.persist();
		e.preventDefault();
		console.log(e);
		const { Owners_Name : Owners_Name, Meter_ID : Meter_ID,Location : Location,Mobile : Mobile , Email : Email , Address : Address}= this.state;
		
		var config = {
				headers:{
					'Content-Type' : 'application/json'
				}
		};

		
		axios.post('https://project-backend-knust.herokuapp.com/newnode', {
            Owners_Name,Meter_ID,Location,Mobile,Email,Address
		}).then(res => {
            if(res.status==200){
                alert("Created Node Successfully");
                this.props.history.push('/homepage');
            }
            else
            alert("Error");
            console.log(res);
		}).catch(console.log);


	};
    

       render() {
        return (
            <div className="main">
            <Header />
            <Slider />
            <div className="content">
            
                <form className="form" onSubmit={this.onSubmit} >
                    <div className="heading">
                    
                        <h2>
                            Create a new Node 
                            <p style={{fontSize:"12px", fontWeight:"normal"}}>Add a new node, include all information of the user.</p>
                        </h2>
                        
                    </div>    
                        <div className = "user_info">
                        <div id="item">
                            <label>Owner's Name *</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Name"
                            id="Owners_Name"
                            name="Owners_Name"
                            onChange={this.onChange}
                            value={this.state.Owners_Name}
                            required
                        />
                            
                        </div>    
                        <div id = "item" style={{marginLeft:"70px"}}>
                            <label>Meter ID *</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Meter ID"
                            id="Meter_ID"
                            name="Meter_ID"
                            onChange={this.onChange}
                            value={this.state.Meter_ID}
                            required
                        />
                            </div>    
                            
                        </div>
                        <div className="contact">
                        <div className="r1">
                            <div id ="item">
                            <label>Location *</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="Location"
                            id="Location"
                            name="Location"
                            onChange={this.onChange}
                            value={this.state.Location}
                            required
                        />
                            </div>



                            <div id ="item" style={{marginLeft:"70px"}}>
                            <label>Mobile *</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"5px" }}
                            placeholder="+233-XXXXXXX"
                            id="Mobile"
                            name="Mobile"
                            onChange={this.onChange}
                            value={this.state.Mobile}
                            required
                        />
                        
                            </div>

                        </div> 

                        <div className="r2">
                        <div id ="item" style={{position:"relative", top:"5px"}}>
                            <label>Email</label>
                            <input
                            type="Email"
                            style={{width: "230px", marginTop:"0px" }}
                            placeholder="Email"
                            id="Email"
                            name="Email"
                            onChange={this.onChange}
                            value={this.state.Email}
                        />
                            </div>


                        <div id ="item" style={{marginLeft:"70px" ,position:"relative", top:"5px"}}>
                            <label>Postal Address</label>
                            <input
                            type="text"
                            style={{width: "230px", marginTop:"0px" }}
                            placeholder="Address"
                            id="Address"
                            name="Address"
                            onChange={this.onChange}
                            value={this.state.Address}
                        />
                            </div>
                        </div>    

                        </div>
                        <button type="submit" id="button" onClick={this.onSumit} style={{ marginTop:"20px" ,backgroundColor:"#1a30fc", color:"white"}}>
                        Create
                    </button>
                        
                    </form>

               
            </div>

                </div>
        );
    }
}
export const Addnode = Form.create()(addnode);