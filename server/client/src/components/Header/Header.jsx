import React from "react";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  console.log(auth);

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">eFeedback</a>
        <ul className="right">
          <li>
            {auth ? (
              <div>
                {" "}
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
