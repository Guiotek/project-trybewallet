import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Wallet extends React.Component {
  render() {
    console.log(this.props);
    const { user: { email } } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            {email}
          </p>
          <p data-testid="total-field">
            0
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Wallet);
