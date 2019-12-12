import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Claims</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map(user => {
          return (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>
                <Link to={"/user/" + user.id}>Claims User</Link>
              </td>
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
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired
    })
  ).isRequired
};

UserList.defaultProps = {
  users: []
};

export default UserList;
