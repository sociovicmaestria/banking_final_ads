import React from "react";
import { NavLink } from "react-router-dom";
import authService from "../../services/AuthService";

function logOut() {
  authService.logOut();
}

function HeaderCashier() {
  const activeStyle = { color: "white" };
  return (
    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="#">
        Banking ADS
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarCollapse"
        aria-controls="navbarCollapse"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={activeStyle} to="/homeCashier">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" activeStyle={activeStyle} to="/cashierTransactions">
              Transactions
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          <span className="navbar-text">{authService.getUserInfo().name}</span>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              activeStyle={activeStyle}
              onClick={logOut}
              to="/"
            >
              LogOut
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default HeaderCashier;
