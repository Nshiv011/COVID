import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from "react-router-dom";
import Home from "./Home";
import Covid from "./Covid";
import Sickpage from "./Sickpage";
import Joinpage from "./Joinpage";
import Resource from "./Resource";


const App=()=>{
    return(
        <>
        
        
       
        <Switch>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/" component={Covid}/>
        <Route exact path="/sick" component={Sickpage}/>
        <Route exact path="/join" component={Joinpage}/>
        <Route exact path="/res" component={Resource}/>
        </Switch>
        
        </>
    );
};
export default App;