import React from "react"
import { Route, Switch } from "react-router"
import Home from "./Home"
import About from "./About"
import Stock from "./Stock"
import data from "./data"
import Dashboard from "./Dashboard"

const Main = (props) => {
    return (
        <main>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/stocks/:symbol" render={props => <Stock data={data} {...props}/>}/> 
                <Route path="/stocks" render={props => <Dashboard data={data} />}/> 
            </Switch>
        </main>
    )
}

export default Main