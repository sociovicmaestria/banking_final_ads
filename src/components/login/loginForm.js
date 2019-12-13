import React from "react";
import './login.css';

const LoginForm = ({ handleSubmit, onChange }) => (
  <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="input-group form-group">
        <div className="input-group-prepend input-group-prepend-login">
          <span className="input-group-text"><i className="fas fa-user"></i></span>
        </div>
        <input
          id="username"
          name="username"
          type="text"
          className="form-control"
          placeholder="username"
          onChange={onChange}/>
      </div>
      <div className="input-group form-group">
        <div className="input-group-prepend input-group-prepend-login">
          <span className="input-group-text"><i className="fas fa-key"></i></span>
        </div>
        <input
          id="password"
          name="password"
          type="password"
          className="form-control"
          placeholder="password"
          onChange={onChange}/>
      </div>
      <div className="row align-items-center remember">
        <input type="checkbox" />Recordar datos
      </div>
      <div className="form-group">
        <input type="submit" value="Login" className="btn float-right login_btn" />
      </div>
    </form>
  </div>
)

export default  LoginForm;