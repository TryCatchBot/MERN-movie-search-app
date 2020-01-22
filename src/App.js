import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Movie from "./Home";
import SearchMovie from "./SearchMovie";
import "./index.css";

const App = () => {
  return (
    <div>
      }
      <Router>
        <Switch>
          <Router>
            <Route exact={true} path="/" component={Movie} />
            <Route path="/search" component={SearchMovie} />
          </Router>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
