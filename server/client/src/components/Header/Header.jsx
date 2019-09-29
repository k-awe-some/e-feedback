import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import StripeButton from "../StripeButton/StripeButton";

const Header = ({ auth }) => (
  <nav>
    <div className="nav-wrapper">
      <Link to={auth ? "/surveys" : "/"} className="left brand-logo">
        eFeedback
      </Link>
      <ul className="right">
        <li>
          {auth ? (
            <div>
              <span>
                Hello, {auth.displayName}. You have {auth.credits} credits.
              </span>
              <StripeButton />
              <a className="waves-effect waves-light btn" href="/api/logout">
                Log out
              </a>
            </div>
          ) : (
            <a className="waves-effect waves-light btn" href="/auth/google">
              Log in with Google
            </a>
          )}
        </li>
      </ul>
    </div>
  </nav>
);

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
