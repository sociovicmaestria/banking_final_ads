import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function CustomerList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Active</th>
          <th>Accounts</th>
        </tr>
      </thead>
      <tbody>
        {props.customers.map(customer => {
          return (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.firstName}</td>
              <td>{customer.lastName}</td>
              <td>{customer.isActive ? "Active" : ""}</td>
              <td>
                <Link to={"/customer/" + customer.id}>Accounts Customer</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

CustomerList.propTypes = {
  customers: PropTypes.arrayOf(
    PropTypes.shape({
      firsName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    })
  ).isRequired
};

CustomerList.defaultProps = {
  customers: []
};

export default CustomerList;
