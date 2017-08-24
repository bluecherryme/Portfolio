import React, {Component} from 'react';
import About from './About';
import './Landing.css';


export default class Landing extends Component{
    constructor(){
        super();
        this.state={about:true, projects:false, skills: false, contact: false}
    }

    render(){
        return(
            <div id="Landing">
                <div id="heading">
                    <h1>Johanna Staedel</h1>
                    <h2>- Full Stack Web Developer -</h2>
                </div>
                <div className="Nav">
                    <h3>About</h3>
                    <h3>Projects</h3>
                    <h3>Skills</h3>
                    <h3>Contact</h3>
                </div>
                <About/>
                </div>
        )
    }
}