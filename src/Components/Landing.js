import React, {Component} from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import RecipeApp from './RecipeApp';
import Boardroom from './Boardroom';
import './Landing.css';


export default class Landing extends Component{
    constructor(){
        super();
        this.state={about:true, projects:false, skills: false, contact: false,
                    showRecipeApp:false, showBoardroom: true}
        
        this.changeMenu = this.changeMenu.bind(this);
        this.toggleShowRecipeApp = this.toggleShowRecipeApp.bind(this);
        this.toggleShowBoardroom = this.toggleShowBoardroom.bind(this);
    }

    toggleShowRecipeApp(){
        this.setState({showRecipeApp:!this.state.showRecipeApp});
    }

    toggleShowBoardroom(){
        this.setState({showBoardroom:!this.state.showBoardroom});
    }

    changeMenu(menuItem){
        switch(menuItem){
            case 'about':
                this.setState({about:true, projects:false, skills: false, contact: false})
                break;
            case 'projects':
                this.setState({about: false, projects: true, skills: false, contact: false});
                break;
            case 'skills':
                this.setState({about: false, projects: false, skills: true, contact: false});
                break;
            case 'contact':
                this.setState({about: false, projects: false, skills: false, contact: true});
                break;
        }
    }

    render(){
        console.log(this.state.showRecipeApp)
        return(
            <div id="Landing">
                <div id="heading">
                    <h1>Johanna Staedel</h1>
                    <h2>- Full Stack Web Developer -</h2>
                </div>
                <div className="Nav">
                    <h3 style={this.state.about?{color:"#AA6D78", width:"400px", borderBottom:"2px solid #AA6D78"}:null} 
                        onClick={()=>this.changeMenu('about')}>About</h3>
                    <h3 style={this.state.projects?{color:"#AA6D78", width:"400px", borderBottom:"2px solid #AA6D78"}:null} 
                        onClick={()=>this.changeMenu('projects')}>Projects</h3>
                    <h3 style={this.state.skills?{color:"#AA6D78", width:"400px", borderBottom:"2px solid #AA6D78"}:null} 
                        onClick={()=>this.changeMenu('skills')}>Skills</h3>
                    <h3 style={this.state.contact?{color:"#AA6D78", width:"400px", borderBottom:"2px solid #AA6D78"}:null} 
                        onClick={()=>this.changeMenu('contact')}>Contact</h3>
                </div>
                {this.state.about?<About/>:null}
                {this.state.projects?<Projects showRecipeApp={this.toggleShowRecipeApp} showBoardroom={this.toggleShowBoardroom}/>:null}
                {this.state.skills?<Skills/>:null}
                {this.state.contact?<Contact/>:null}
                {this.state.showRecipeApp?<RecipeApp showRecipeApp={this.toggleShowRecipeApp}/>:null}
                {this.state.showBoardroom?<Boardroom showBoardroom={this.toggleShowBoardroom}/>:null}
            </div>
        )
    }
}