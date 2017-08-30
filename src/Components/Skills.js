import React, {Component} from 'react';
import './Skills.css';


export default class Skills extends Component{
    render(){
        return(
            <div className="container">
                <div className="ctn-inner">
                    <div className="content contact">
                        <h2>Skills</h2>
                        <div className="skills">
                            <sec>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/HTML5_Logo_512.png')} alt='html5'/>
                                    <div>HTML5</div>
                                </wrapper>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/seeicons__57e9193310726.png')} alt='css3'/>
                                    <div>CSS3</div>
                                </wrapper>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/JavaScript-logo.png')} alt='Javascript'/>
                                    <div>JAVASCRIPT</div>
                                </wrapper>
                            </sec>
                            <sec>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/apps.png')} alt='React'/>
                                    <div>REACT</div>
                                </wrapper>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/logo.png')} alt='Redux'/>
                                    <div>REDUX</div>
                                </wrapper>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/nodejs-icon.svg')} alt='Node'/>
                                    <div>NODE</div>
                                </wrapper>
                            </sec>
                            <sec>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/sql.png')} alt='Postgres'/>
                                    <div>SQL</div>
                                </wrapper>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/Git-Icon-Black.png')} alt='Git'/>
                                    <div>GIT</div>
                                </wrapper>
                                <wrapper>
                                    <img className="tech-img" src={require('./../Assets/responsive-design.png')} alt='Responsive'/>
                                    <div>RESPONSIVE DESIGN</div>
                                </wrapper>
                            </sec>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}