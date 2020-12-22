import React, { Component } from "react";
import { BrowserRouter , Route } from 'react-router-dom';
import Home from './Components/Home.jsx';
import Products from './Components/Products';
import Dashboard from './Components/Dashboard';
import Store from './Components/Store';
import Orders from './Components/Orders';


class App extends React.Component {
    render() {
        return ( 
            <BrowserRouter>
                <div className="App">
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/products" component={Products}></Route>
                    <Route path="/dashboard" component={Dashboard}></Route>
                    <Route path="/store" component={Store}></Route>
                    <Route path="/orders" component={Orders}></Route>
                </div>
            </BrowserRouter>
        );
    }
}
export default App;






