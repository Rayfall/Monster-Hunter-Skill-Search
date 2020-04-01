import React, { useContext } from "react"
import { Route, Link, Switch } from 'react-router-dom';
import Home from "../Pages/Home"
import Build from "../Pages/Build"
import Search from "../Pages/Search"
import UList from "../Pages/User_List"
import BP from "../Pages/Best_Practices"
import "../styles/Main.css";


export default function Main(props) {
    
    
    return (
        <div className="main-body">
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/build" component={Build}/>
                <Route path="/search" component={Search}/>
                <Route path="/userList" component={UList}/>
                <Route path="/bestPractices" component={BP}/>
            </Switch>
        </div>
    );
}


//<li key={index}>{skill.name}</li>
//return <li key={index}>{result}</li>;