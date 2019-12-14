import React from "react";
import './login.css';
import authService from 'services/AuthService';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import LoginForm from './loginForm';
import { ROLE } from '../Constans'

class LoginPage extends React.Component {
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
      .then((user) => {
        switch (user.role.id) {
          case ROLE.MANAGER:
            this.props.history.push("/homeMaganer");
            break;
          case ROLE.CASHIER:
            this.props.history.push("/homeCashier");
            break;
          case ROLE.CUSTOMER:
            this.props.history.push("/homeCustomer");
            break;
        }
      })
      .catch(() => {
        toast.error("User or Password Invalid!");
      });
  }
  render() {
    return (
      <div className="contain">
        <div className="d-flex justify-content-center h-100">
          <div className="card card-login">
            <div className="card-header">
              <h3>Iniciar Sesión</h3>
            </div>
            <LoginForm
              handleSubmit={this.handleSubmit}
              onChange={this.onChange}/>
          </div>
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  })
};

export default LoginPage;