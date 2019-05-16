import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';
import '../styles/slider.css';



class slider extends React.Component {

    render() {
        return (
            <div>
                <div id="sidebar">
                 
                    <ul>
                        <li><Link to="/homepage">Dashboard</Link></li>
                        <li><Link to="/stats">Statistics</Link></li>
                        <li><Link to="/report">Reports</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/about">About Us</Link></li>
                    </ul>

                </div>
            </div>
        );
    }
}
export const Slider = Form.create()(slider);