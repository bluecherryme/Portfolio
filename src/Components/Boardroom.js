import React, {Component} from 'react';

export default class Boardroom extends Component{
    componentDidMount(){
        window.scroll(0,0);
    }
    render(){
        return(
            <div className="modal-outer">
                <div className="modal-inner">
                    <img onClick={()=>this.props.showBoardroom()}
                    id="close" src={require('./../Assets/close.svg')} alt="close"/>

                    <div className="sub-header">
                        <h1>Boardroom — Slack with whiteboards using sockets - Group Project</h1>
                        <h2>A whiteboarding environment allowing remote teams to collaborate simultaneously</h2>
                        <span>Check out the live project<a href="http://theboardroom.herokuapp.com" target="_blank" rel="noopener noreferrer">here</a></span>
                        <span>or have a look at the code on GitHub<a href="https://github.com/TheBestProject/whiteboard" target="_blank" rel="noopener noreferrer">here</a></span>
                        
                        <div className="overview">
                            <ul>
                                <li><b>Technologies used: HTML| CSS | JavaScript | React | Redux | Node.js | PostgreSQL | Sockets.io | Canvas</b></li>
                            </ul>                  
                        </div>
                    </div>
                            
                    <div className="partition">
                        <div className="screenPrint">
                            <img src={require('./../Assets/board_landing.png')} alt="landing-page"/>
                        </div>
                        <div className="description">
                            <h4>Landing Page</h4>
                            <ul>
                                <li>A user can make or join a group.</li>
                                <li>Within a group various projects can be made.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="partition">
                        <div className="screenPrint">
                            <img src={require('./../Assets/board_cards.png')} alt="landing-page"/>
                        </div>
                        <div className="description">
                            <h4>Grid View</h4>
                            <ul>
                                <li>Within Projects, previously saved whiteboards can be accessed and new whiteboards can be added</li>
                            </ul>
                        </div>
                    </div>

                    <div className="partition">
                        <div className="screenPrint">
                            <img src={require('./../Assets/board.png')} alt="landing-page"/>
                        </div>
                        <div className="description">
                            <h4>Whiteboard</h4>
                            <p>This view has been my main focus within the group project.</p>
                            <p>Initially, I had to figure out how canvas works and how to manipulate 
                                it with Javascript. We ended up using parts of a npm library for the main 
                                functions, i.e. drawing a line, a square and an ellipse. 
                                I then had to integrate the canvas functions within React, 
                                which represented a challenge since React is using a virtual DOM 
                                and we were not consistently able to access the canvas object. </p>
                            <p>Each object drawn on the canvas is added to Redux state. 
                                I wrote reducer functions to implement the undo, redo and clear 
                                buttons. </p>
                            <p>Sockets allow multiple users to work on the same whiteboard no matter their location.
                            </p>
                            <p>Drawings are submitted in real time and the undo and redo functions also work across boards.</p>
                        </div>
                    </div>
                </div>  
            </div>
        );
    }
}