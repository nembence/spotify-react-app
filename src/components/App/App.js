import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Favorite from "../Favorite/Favorite";
import Category from "../Category/Category";
import "./App.css";
import { FavouriteProvider } from "../../context/FavouriteContext";

function App() {
    return (
        <FavouriteProvider>
            <Router>
                <div className='wrapper'>
                    <Header />
                    <Navbar />
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>
                        <Route path='/favorite'>
                            <Favorite />
                        </Route>
                        <Route path='/artist'>
                            <Category categoryType={"artist"} />
                        </Route>
                        <Route path='/album'>
                            <Category categoryType={"album"} />
                        </Route>
                        <Route path='/track'>
                            <Category categoryType={"track"} />
                        </Route>
                        <Route path='/playlist'>
                            <Category categoryType={"playlist"} />
                        </Route>
                    </Switch>

                    <Footer />
                </div>
            </Router>
        </FavouriteProvider>
    );
}

export default App;
