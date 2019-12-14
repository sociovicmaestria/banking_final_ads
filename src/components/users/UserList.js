import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>USERNAME</th>
          <th>FIRST NAME</th>
          <th>LAST NAME</th>
          <th>ID NUMBER</th>
          <th>ADDRESS</th>
          <th>PHONE</th>
          <th>EMAIL</th>
          <th>ROLE</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.person.firstName}</td>
              <td>{user.person.lastName}</td>
              <td>{user.person.idNumber}</td>
              <td>{user.person.address}</td>
              <td>{user.person.phone}</td>
              <td>{user.person.email}</td>
              <td>{user.role.name}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  ).isRequired
};

UserList.defaultProps = {
  users: []
};

export default UserList;
