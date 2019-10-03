import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <div>
    <h2>DASHBOARD</h2>{" "}
    <div class="fixed-action-btn">
      <Link
        to="surveys/new"
        class="btn-floating btn-large waves-effect waves-light red"
      >
        <i class="material-icons">add</i>
      </Link>
    </div>
  </div>
);

export default Dashboard;
