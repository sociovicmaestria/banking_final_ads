import React from "react";
import PropTypes from "prop-types";
import authService from "../services/AuthService";
import "../assets/css/style.css";
import { toast } from "react-toastify";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    authService
      .logIn(this.state)
      .then(() => {
        const roles = authService.getUserInfo().claims;

        const role = roles.find(p => p.type === "isAdmin");

        if (role.value === "true") {
          this.props.history.push("/home");
        } else {
          this.props.history.push("/my-account");
        }
      })
      .catch(() => {
        toast.error("User or Password Invalid!");
      });
  };

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              width="100"
              src="https://cdn0.iconfinder.com/data/icons/user-icon-profile-businessman-finance-vector-illus/100/19-1User-512.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form>
            <input
              type="text"
              id="name"
              className="fadeIn second"
              name="name"
              placeholder="user"
              onChange={this.onChange}
            />
            <input
              type="password"
              id="password"
              className="fadeIn third"
              name="password"
              placeholder="password"
              onChange={this.onChange}
            />
            <input
              onClick={this.handleSubmit}
              type="submit"
              className="fadeIn fourth button-style"
              value="Log In"
            ></input>
          </form>

          <div id="formFooter">
            <span>By Team ADS</span>
          </div>
        </div>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default Login;
