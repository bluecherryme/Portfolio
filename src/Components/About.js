import React, {Component} from 'react';
import './About.css';


export default class About extends Component{
    render(){
        return(
            <div className="About">
                <div className="tabs">
                    <h2>Web Development</h2>
                    <h2>Work History</h2>
                    <h2>Personal</h2>
                </div>
            </div>
        );
    }
}