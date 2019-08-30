import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import RollDice from "./RollDice";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={RollDice} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
