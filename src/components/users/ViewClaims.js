import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import userStore from "../../stores/userStore";
import * as userActions from "../../actions/userActions";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const ViewClaims = props => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    userStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (user.length === 0) {
      userActions.loadUserById(id);
    }
    return () => userStore.removeChangeListener(onChange);
  }, [user.length, props.match.params.id]);

  function onChange() {
    setUser(userStore.getUserById());
  }

  const claims = user.claims || [];

  return (
    <>
      <Header />
      <main role="main" className="container">
        <div className="col-md-8">
          <Link className="btn btn-info" style={{ float: "right" }} to="/users">
            Back
          </Link>
          <h2>Users Claims</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Claims</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{user.name}</td>
                <td>
                  <ul>
                    {claims.map(claim => {
                      return (
                        <li key={claim.id}>
                          {claim.type} (
                          {claim.value == "true" ? "Authorized" : "Denied"})
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

ViewClaims.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ViewClaims;
