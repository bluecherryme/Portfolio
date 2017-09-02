import React, {Component} from 'react';
import './Projects.css';


export default class Projects extends Component{
    render(){
        console.log(this.props);
        return(
            <div className='container'>
                <div className="ctn-inner">
                    <div className="content contact">
                        <h1>Projects</h1>
                        <projects>
                            <h2 onClick={()=>this.props.showRecipeApp()}>Recipe App</h2>
                            <h2 onClick={()=>this.props.showBoardroom()}>The Boardroom</h2>
                            <h2 id="last">More coming soon</h2>
                        </projects>
                    </div>
                </div>
            </div>
        );
    }
}