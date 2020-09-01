import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Favorite from "../Favorite/Favorite";
import Category from "../Category/Category";
import "./App.css";

function App() {
    return (
        <Router>
            <div className="wrapper">
                <Header />
                <Navbar />

                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/favorite">
                        <Favorite />
                    </Route>
                    <Route path="/artist">
                        <Category name={"artist"} />
                    </Route>
                    <Route path="/album">
                        <Category name={"album"} />
                    </Route>
                    <Route path="/track">
                        <Category name={"track"} />
                    </Route>
                    <Route path="/playlist">
                        <Category name={"playlist"} />
                    </Route>
                </Switch>

                <Footer />
            </div>
        </Router>
    );
}

export default App;
