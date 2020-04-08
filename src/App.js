import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import {
  DefaultFashionista,
  MainFashionista,
} from "./pages/default_fashionista";
import {
  DefaultFashionseeker,
  MainFashionseeker,
} from "./pages/default-fashionseeker";
import { StaRegister, SeekerRegister } from "./pages/register";

import "./assets/font/sofiapro/style.css";
import "./assets/font/helvetica/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={DefaultFashionseeker} />
          <Route exact path="/defaultsta" component={DefaultFashionista} />
          <Route exact path="/mainsta" component={MainFashionista} />
          <Route exact path="/mainseeker" component={MainFashionseeker} />
          <Route exact path="/staregister" component={StaRegister} />
          <Route exact path="/seekerregister" component={SeekerRegister} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
