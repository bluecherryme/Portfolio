import React, {Component} from 'react';
import './RecipeApp.css';

export default class RecipeApp extends Component{
    render(){
        return(
            <div className="modal-outer">
                <div className="modal-inner">
                    <img onClick={()=>this.props.showRecipeApp()}
                     id="close" src={require('./../Assets/close.svg')} alt="close"/>

                    <div className="sub-header">
                        <h1>Let’s Cook — Recipe site - Personal Project</h1>
                        <h2>A full stack personal project allowing users to search for recipes, save them and generate a shopping list</h2>
                        <span>Check out the live project<a href="http://bluecherry.online" target="_blank" rel="noopener noreferrer">here</a></span>
                        <span>or have a look at the code on GitHub<a href="https://github.com/bluecherryme/RecipeApp" target="_blank" rel="noopener noreferrer">here</a></span>
                        
                        <div className="overview">
                            <ul id="tech">
                                <li><b>Technologies used: HTML| CSS | JavaScript | React | Redux | Node.js Express | PostgreSQL</b></li>
                                <li>Authentication using Auth0</li>
                                <li>Fully responsive custom CSS design</li>
                                <li>Used 4 different endpoints of the Spoonacular Recipe API and the Youtube API</li>
                                <li>5 Reducers to manipulate data</li>
                                <li>Used PostgreSQL DB to store user information, recipes, and ingredients</li>
                                <li>End to end development from design (Adobe Experience Design) to hosting</li>
                            </ul>               
                        </div>
                    </div>
                              
                    <div className="partition">
                        <div className="screenPrint">
                            <img src={require('./../Assets/landing_page.png')} alt="landing-page"/>
                        </div>
                        <div className="description">
                            <h4>Landing Page</h4>
                            <ul>
                                <li>Navbar using React Router Links to navigate to the different views.</li>
                                <li>The Login button is replaced by the MyAccount Tab and the Logout button once a user has logged in.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="partition">
                    <div className="screenPrint">
                        <img src={require('./../Assets/Search.png')} alt="search-page"/>
                    </div>
                    <div className="description">
                        <h4>Search</h4>
                        <ul>
                            <li>The user has two options to search:
                                <ol>
                                    <li>By ingredients</li>
                                    <li>By recipe name</li>
                                </ol>
                            </li>
                            <li>Commas and spaces are filtered out of the search input and all 
                            letters are converted to lowercase so that the final URL can be build and axios 
                            calls made to two different endpoints of the Spoonacular Recipe API.</li>
                            <li>The placeholder in the search input field changes depending on the search option chosen.</li> 
                        </ul>
                    </div>
                </div>

                <div className="partition">
                    <div className="screenPrint">
                        <img src={require('./../Assets/cards.png')} alt="landing-page"/>
                    </div>
                    <div className="description">
                        <h4>Search Results</h4>
                        <ul>
                            <li>Search Results are shown in the form of cards - initially 6 recipes are shown.</li>
                            <li>On hover the recipe name and some additional information is shown.</li>
                            <li>The user can click a “See More” button to load more recipes. This button triggers 
                                two different functions depending on whether the user is searching by ingredients or by name. 
                                The endpoint that provides recipes by name allows for an offset, 
                                which means recipes can be dynamically requested once the user clicks the button. 
                                The endpoint which provides recipes by ingredients, does not allow for an offset and 
                                recipes have to be stored on state, to be displayed once the user clicks the 'See More' button.
                            </li>
                            <li>The user has the opportunity to click a button to be brought up to the search section to search again.</li>
                            <li>The user can click a button to view a random recipe.</li>
                        </ul>
                    </div>
                </div>
                
                <div className="partition">
                    <div className="screenPrint">
                        <img src={require('./../Assets/recipe_view.png')} alt="landing-page"/>
                    </div>
                    <div className="description">
                        <h4>Recipe Detail</h4>
                        <ul>
                            <li>Once the user clicks a recipe card, an axios call is made to another endpoint of the recipe API.</li>
                            <li>The information returned is stored on redux state and displayed in the detailed recipe view.</li>
                            <li>The user can save a recipe to his/her account.</li>
                            <li>If the user is not yet logged in, he is asked to login first.</li>
                            <li>The user can save the ingredients to a shopping list in his/her account.</li>
                            <li>Both saving actions change the state on the front end and, also, send data to the back 
                                end via PUT endpoints on a node server to a online Heroku PostgreSQL database. </li>
                            <li>Once the user clicks the save button a pop-up window appears confirming that saving 
                                has been successful - a timeout function makes the pop-up disappear.</li>
                        </ul>
                    </div>
                </div>

                <div className="partition">
                    <div className="screenPrint">
                        <img src={require('./../Assets/recipe_video_search.png')} alt="landing-page"/>
                    </div>
                    <div className="description">
                        <h4>Video Search</h4>
                        <ul>
                            <li>A user can search for recipe videos on YouTube via the YouTube API.</li>
                            <li>5 videos are returned and can be accessed via the “Next” button</li>
                        </ul>
                    </div>
                </div>

                <div className="partition">
                    <div className="screenPrint">
                        <img src={require('./../Assets/saved_recipes.png')} alt="landing-page"/>
                    </div>
                    <div className="description">
                        <h4>MyAccount</h4>
                        <ul>
                            <li>A user can access his/her account and view the recipes that he has previously received.</li>
                            <li>Once the user clicks on MyAccount, a GET request is send to the server which fetches all 
                                recipes that have been saved by that particular user in the database</li> 
                        </ul>
                    </div>
                </div>

                <div className="partition">
                    <div className="screenPrint">
                        <img src={require('./../Assets/shopping_list.png')} alt="landing-page"/>
                    </div>
                    <div className="description">
                        <h4>Shopping List</h4>
                        <ul>
                            <li>A user can save ingredients from a recipe to his/her shopping list.</li>
                            <li>Salt, pepper and sugar are filtered out prior to adding the ingredients 
                                to the list under the presumption that those ingredients are usually available.</li>
                            <li>Items can be manually added and deleted.</li>
                            <li>The whole list can be cleared and saved upon which a PUT request submits the entire list to the database.</li>
                        </ul>
                    </div>
                </div>

                </div>
            </div>
        );
    }
}