import React, {Component} from 'react';
import './Projects.css';


export default class Projects extends Component{
    render(){
        return(
            <div className='container'>
                <div className="ctn-inner">
                    <div className="content contact">
                        <h1>Projects</h1>
                        <projects>
                            <project>
                              <h2>Recipe App</h2>
                            </project>
                            <project>
                                <h2>The Boardroom</h2>
                            </project>
                            <project>
                                <h2>More coming soon</h2>
                            </project>
                        </projects>
                    </div>
                </div>
            </div>
        );
    }
}