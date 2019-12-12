import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import customerStore from "../../stores/customerStore";
import * as customerActions from "../../actions/customerActions";
import Header from "../common/Header";
import { Link } from "react-router-dom";

const ViewAccounts = props => {
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    customerStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (customer.length === 0) {
      customerActions.loadCustomerById(id);
    }
    return () => customerStore.removeChangeListener(onChange);
  }, [customer.length, props.match.params.id]);

  function onChange() {
    setCustomer(customerStore.getCustomerById());
  }

  const accounts = customer.data || [];

  return (
    <>
      <Header />
      <main role="main" className="container">
        <div className="col-md-8">
          <Link className="btn btn-info" style={{ float: "right" }} to="/customers">
            Back
          </Link>
          <h2>Customer Accounts</h2>
          <table className="table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Accounts</th>
              </tr>
            </thead>
            {accounts.length > 0 ? (
              <tbody>
              <tr>
                <td>{accounts[0].customer.firstName}</td>
                <td>{accounts[0].customer.lastName}</td>
                <td>
                  <ul>
                    {accounts.map(account => {
                      return (
                        <li key={account.id}>
                          {account.number}
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
              </tbody>
            ) : (<tr><td colSpan={3}></td></tr>)}
          </table>
        </div>
      </main>
    </>
  );
};

ViewAccounts.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ViewAccounts;
