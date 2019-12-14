import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import UserForm from "./UserForm";
import userStore from "../../stores/userStore";
import { toast } from "react-toastify";
import * as userActions from "../../actions/userActions";
import HeaderManager from "../common/HeaderManager";

const ManageUserPage = props => {
  const [errors, setErrors] = useState({});
  const [users, setUsers] = useState(userStore.getUsers());
  const [user, setUser] = useState({
    id: null,
    name: "",
    password: ""
  });

  useEffect(() => {
    userStore.addChangeListener(onChange);
    const id = props.match.params.id;
    if (users.length === 0) {
      userActions.loadUsers();
    } else if (id) {
      setUser(userStore.getUserById(id));
    }
    return () => userStore.removeChangeListener(onChange);
  }, [users.length, props.match.params.id]);

  function onChange() {
    setUsers(userStore.getUsers());
  }

  function handleChange({ target }) {
    //debugger;
    setUser({
      ...user,
      [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};
    if (!user.name) _errors.name = "Name is required";
    if (!user.password) _errors.password = "Password is required";
    setErrors(_errors);
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    userActions.saveUser(user).then(() => {
      props.history.push("/users");
      toast.success("User saved.");
    });
  }

  return (
    <>
      <HeaderManager />
      <UserForm
        user={user}
        errors={errors}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
};

ManageUserPage.propTypes = {
  match: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default ManageUserPage;
