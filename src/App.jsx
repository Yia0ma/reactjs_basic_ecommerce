import React from "react";
import {Switch, Route} from "react-router-dom";

import Header from "./components/Header";
import Cart from "./pages/Cart";
import Photos from "./pages/Photos";

const App = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Photos/>
                </Route>
                <Route path="/cart" component={Cart}/>
            </Switch>
        </>
    );
};

export default App;