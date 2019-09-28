import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../redux/actions"; // 'actions' as obj

import Header from "../Header/Header";
import Landing from "../Landing/Landing";
import Dashboard from "../Dashboard/Dashboard";
import SurveyNew from "../SurveyNew/SurveyNew";

const App = ({ fetchUser }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="container">
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </Router>
    </div>
  );
};

export default connect(
  null,
  actions
)(App);
