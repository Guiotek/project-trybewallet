import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Header extends Component {
  multiply = () => {
    const { wallet: { expenses } } = this.props;
    let number = 0;
    expenses.forEach((e) => {
      const rate = Number(e.exchangeRates[e.currency].ask);
      number += Number(e.value) * rate;
    });
    return number.toFixed(2);
  };

  render() {
    const { user: { email } } = this.props;
    return (
      <div>
        <header>
          <p data-testid="email-field">
            {email}
          </p>
          <p data-testid="total-field">
            {
              this.multiply()
            }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </header>
      </div>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Header);
