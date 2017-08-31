import React, {Component} from 'react';
import './RecipeApp.css';

export default class RecipeApp extends Component{
    render(){
        return(
            <div className="modal-outer">
                <div className="modal-inner">
                    <img onClick={()=>this.props.showRecipeApp()}
                     id="close" src={require('./../Assets/close.svg')} alt="close"/>
                    <h1>Let’s Cook — Recipe site - Personal Project</h1>
                    <div className="sub-header">
                        <span>Checkout the live project<a href="bluecherry.online">here</a></span>
                        <span>or have a look at the code on GitHub<a href="https://github.com/bluecherryme/RecipeApp">here</a></span>
                    </div>
                    
                     
                    
                    A full stack personal project allowing users to search for recipes, save them and generate a shopping list 
                    
                    Overview:
                    Technologies used: HTML| CSS | JavaScript | React | Redux | Node.js Express | PostgreSQL
                    Authentication using Auth0
                    Fully responsive custom CSS design
                    Used 4 different endpoints of the Spoonacular Recipe API and the Youtube API
                    5 Reducers to manipulate data
                    Used PostgreSQL DB to save user information, recipes, and ingredients
                    End to end development from design (Adobe Experience Design) to hosting
                    
                </div>
            </div>
        );
    }
}