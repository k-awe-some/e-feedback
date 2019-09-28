import React, { useState } from "react";

const Header = () => {
  const [auth, setAuth] = useState(null);

  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">eFeedback</a>
        <ul className="right">
          <li>
            <a>Log in with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
