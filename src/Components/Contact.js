import React, {Component} from 'react';
import './Contact.css';


export default class Contact extends Component{
    render(){
        return(
            <div className='container'>
                <div className="ctn-inner">
                    <div className="content contact">
                        <h2>Contact</h2>
                        <p>Let's get in touch!</p>
                        <p id='email'><a href="mailto:bluecherryme@gmail.com">bluecherryme@gmail.com</a></p>
                        <p id='phone'>0159 0552 4221</p>
                    </div>
                </div>
            </div>
        );
    }
}