import React, { useState, useEffect } from "react";
import userStore from "../../stores/userStore";
import UserList from "./UserList";
import { Link } from "react-router-dom";
import { loadUsers } from "../../actions/userActions";
import HeaderManager from "../common/HeaderManager";

function UsersPage() {
  const [users, setUsers] = useState(userStore.getUsers());

  useEffect(() => {
    userStore.addChangeListener(onChange);
    loadUsers();
    return () => userStore.removeChangeListener(onChange);
  }, []);

  function onChange() {
    setUsers(userStore.getUsers());
  }

  return (
    <>
      <HeaderManager />
      <main role="main" className="container">
        <div className="col-md-12">
          <h2>Users</h2>
          <hr />
          <Link
            className="btn btn-success mb-3"
            style={{ float: "right" }}
            to="/createUser"
          >
            Add User
          </Link>
          <UserList users={users} />
        </div>
      </main>
    </>
  );
}

export default UsersPage;
