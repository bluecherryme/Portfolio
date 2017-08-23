import React, {Component} from 'react';
import Nav from './Nav';
import About from './About';
import './Landing.css';


export default class Landing extends Component{
    render(){
        return(
            <div id="Landing">
                <div id="heading">
                    <h1>Johanna Staedel</h1>
                    <h2>- Full Stack Web Developer -</h2>
                </div>
                <Nav/>
                <About/>
                </div>
        )
    }
}