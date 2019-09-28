import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  console.log(auth);

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? "/surveys" : "/"} className="left brand-logo">
          eFeedback
        </Link>
        <ul className="right">
          <li>
            {auth ? (
              <div>
                <span>Hello, {auth.displayName}</span>
                <a className="waves-effect waves-light btn" href="/api/logout">
                  Log out
                </a>
              </div>
            ) : (
              <a
                className="waves-effect waves-light btn"
                href="/api/logout"
                href="/auth/google"
              >
                Log in with Google
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
