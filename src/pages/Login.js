import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Login extends React.Component {
  onChangeinput = () => {

  };

  render() {
    const { user: { email, password, buttonDisabled } } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="email">
            <input
              type="email"
              data-testid="email-input"
              id="email"
              name="email"
              value={ email }
              onChange={ () => this.onChangeinput() }
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              data-testid="password-input"
              id="password"
              value={ password }
              name="senha"
              minLength="6"
              required
            />
          </label>
          <button
            type="button"
            disabled={ buttonDisabled }
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

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(Login);
