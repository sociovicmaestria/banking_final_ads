import React, { useState, useEffect } from "react";
import userStore from "../../stores/userStore";
import UserList from "./UserList";
import { Link } from "react-router-dom";
import { loadUsers } from "../../actions/userActions";
import Header from "../common/Header";

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
      <Header />
      <main role="main" className="container">
        <div className="col-md-8">
          <h2>Users</h2>
          <Link
            className="btn btn-success"
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
