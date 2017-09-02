import React, {Component} from 'react';
import './About.css';


export default class About extends Component{
    constructor(){
        super();

        this.state={webDev:true, workHistory: false, personal:false}

        this.changeTab = this.changeTab.bind(this);
    }

    changeTab(tab){        
        switch(tab){
            case "webDev":        
                this.setState({webDev:true, workHistory:false,personal:false});
                break;
            case "workHistory":
                this.setState({webDev:false, workHistory:true,personal:false});
                break;
            case "personal":
                this.setState({webDev:false, workHistory:false,personal:true});
        }
    }

    render(){
        return(
            <div className="container">
                <div className="ctn-inner">
                    <div className="tabs">
                        <div onClick={()=>this.changeTab("webDev")}
                            className="h2Wrapper" style={this.state.webDev?{backgroundColor:'white',color: "#AA6D78"}:null}>
                            <h3>Web Development</h3>
                        </div>
                        <div onClick={()=>this.changeTab("workHistory")}
                            className="h2Wrapper" style={this.state.workHistory?{backgroundColor:'white',color: "#AA6D78"}:null}>
                            <h3>Work History</h3>
                        </div>
                        <div onClick={()=>this.changeTab("personal")}
                            className="h2Wrapper" style={this.state.personal?{backgroundColor:'white',color: "#AA6D78"}:null}>
                            <h3>Personal</h3>
                        </div>
                    </div>
                    {this.state.webDev?
                        <div className="content">
                            <p>In 2015, I started learning the basics of Python and immensely enjoyed 
                            the challenge and feeling of achievement that came with every solved problem.
                            In 2016, I switched to learning <b>HTML, CSS and Javascript,</b> which allowed me to 
                            progress faster and see immediate results. Doing this, for one year, in my spare 
                            time solidified the wish to code fulltime. In May 2017, I attended a 3-month immersive coding
                            program to speed-up my learning process. There extended my knowledge to include back-end development,
                            utilizing <b>Node.js</b> and <b>PostgreSQL</b>, as well as <b>React</b> and<b> Redux</b>.    </p>
                        </div>:null}
                    {this.state.workHistory?
                        <div className="content">
                            <p>I worked for nearly 10 years in the production industry for an international consumer 
                            products company in Germany. There, I was responsible for the planning and materials disposition
                            of 4 cosmetic production lines.</p>
                            <p>For the last 6 years, I worked as a Conveyancer / 
                            Legal Assistant for a small law firm in Australia.
                            Whilst I enjoyed both occupations, I felt I needed
                            a new challenge and programming certainly qualifies as that.</p>
                        </div>:null}
                    {this.state.personal?
                        <div className="content">
                            <p>As an avid traveller, I feel nowhere and everywhere at home! 
                            I love to discover new things, travel to new places and meet new people. 
                            In my free time, I am drawn to nature, hiking and camping, but
                            I also like to hide away and solve a problem, <b>learn  
                            new technologies </b>or fix a bug. </p>
                        </div>:null}
                </div>
            </div>
        );
    }
}