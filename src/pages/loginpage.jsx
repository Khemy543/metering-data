import React from 'react';
import {Form , Button} from 'antd';

import '../styles/loginpage.css';

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

class login extends React.Component {
	constructor() {
		super();
		this.state = {
			UserName: '',
			Password: '',
			
		};
	}
	state ={
		loading: false,
		iconLoading: false,
		};

		enterLoading = e =>{
			this.setState({loading:true});
			this.onSubmit(e);
		};

		enterIconLoading = () =>{
			this.setState({iconLoading:true});
		};

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
		const { UserName: userName, Password: password } = this.state;
		
		var config = {
				headers:{
					'Content-Type' : 'application/json'
				}
		};

		post('https://project-backend-knust.herokuapp.com/login', {
			userName, password
		}).then(res => {
			if(res.status === 201){
				
				this.props.history.push('/homepage');
			}
			else
			{
				setTimeout(function(){ alert(res.message)}, 100);
				this.props.history.go(0);
				
			}

		}).catch(console.log);

          
	};
	
	render() {
		return (
			<div className="body">
				<div className="login-content">
					<form onSubmit={this.onSubmit}>
						<h2>Login </h2>
						<div className="email">
							<input
								type="text"
								placeholder="Username"
								id="UserName"
								name="UserName"
								onChange={this.onChange}
                                value={this.state.UserName}
                                required
							/>
						</div>

						<div className="password">
							<input
								type="password"
								placeholder="Password"
								id="Password"
								name="Password"
								onChange={this.onChange}
                                value={this.state.Password}
                                required
							/>
						</div>

						<div className="checkbox">
							<input type="checkbox" id="checkbox" />
							Remember me
						</div>
						<div >
							<Button  id="button" loading={this.state.loading} onClick={this.enterLoading}> 
								Login
							</Button>
						</div>
						<p> </p>
						
					</form>
				</div>
			</div>
		);
	}
}
export const Login = Form.create()(login);