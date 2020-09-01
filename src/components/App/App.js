import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";
import Home from "../Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function App() {
    return (
        <Router>
            <Header />
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
            </Switch>
            <Main />
            <Footer />
        </Router>
    );
}

export default App;
