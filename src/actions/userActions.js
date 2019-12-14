import dispatcher from "../appDispatcher";
import * as userApi from "../api/userApi";
import actionTypes from "./actionTypes";

export function saveUser(course) {
  return userApi.saveUser(course).then(savedUser => {
    dispatcher.dispatch({
      actionType: actionTypes.CREATE_USER,
      course: savedUser
    });
  });
}

export function loadUsers() {
  return userApi.getUsers().then(users => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_USERS,
      users: users
    });
  });
}

export function loadUserById(id) {
  return userApi.getUserById(id).then(user => {
    dispatcher.dispatch({
      actionType: actionTypes.GET_USER,
      user: user
    });
  });
}

export function loadRoles() {
  return userApi.getRoles().then(roles => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_ROLES,
      roles: roles
    });
  });
}
