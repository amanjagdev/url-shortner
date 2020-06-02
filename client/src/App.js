import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

//Imoprting Components
import Main from "./components/Main";
import Aside from "./components/Aside";
import Redirect from "./components/Redirect";
import NotFound from "./components/NotFound";

const MainContent = () => {
  return (
    <React.Fragment>
      <Main />
      <Aside />
    </React.Fragment>
  );
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={MainContent} />
        <Route path="/:code" exact component={Redirect} />
        <Route path="/error/404" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
