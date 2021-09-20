import React from "react";
import "./App.css";
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div style={{ maxWidth: "50rem", margin: "4rem auto" }}>
      <GlobalProvider>
        <Router>
          <Switch>
            <Route path="/add" component={AddUser} />
            <Route path="/edit/:id" component={EditUser} />
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </GlobalProvider>
    </div>
  );
}

export default App;
