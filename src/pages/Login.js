import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { EmailPayload } from '../redux/actions';

class Login extends React.Component {
  state = {
    email: '',
    password: '',
    buttonDisabled: true,
    redirect: false,
  };

  verifyEmail = () => {
    const { email, password } = this.state;
    const minLength = 6;
    const re = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]/i;
    if (re.test(email) && password.length >= minLength) {
      this.setState({
        buttonDisabled: false,
      });
    } else {
      this.setState({
        buttonDisabled: true,
      });
    }
  };

  save = () => {
    const { emailDispatch } = this.props;
    const { email } = this.state;
    emailDispatch(email);
    this.setState({
      redirect: true,
    });
  };

  onInputChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => this.verifyEmail());
  };

  render() {
    const { buttonDisabled, email, password, redirect } = this.state;
    return (
      <div>
        {
          redirect && <Redirect to="/carteira" />
        }
        <form>
          <label htmlFor="email">
            <input
              type="email"
              data-testid="email-input"
              id="email"
              name="email"
              value={ email }
              onChange={ this.onInputChange }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              data-testid="password-input"
              id="password"
              value={ password }
              onChange={ this.onInputChange }
              name="password"
              minLength="6"
              required
            />
          </label>
          <button
            type="button"
            disabled={ buttonDisabled }
            onClick={ this.save }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  user: PropTypes.object,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  emailDispatch: (state) => dispatch(EmailPayload(state)),
});

export default connect(null, mapDispatchToProps)(Login);
