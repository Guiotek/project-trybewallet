import React, { Component } from 'react';

class WalletForm extends Component {
  render() {
    return (
      <div>
        <label htmlFor="dinner">
          <input type="number" id="dinner" data-testid="value-input" />
          <textarea
            id="dinner"
            name="story"
            rows="5"
            cols="33"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="select">
          <select id="select" data-testid="currency-input">
            {}
          </select>
        </label>
      </div>
    );
  }
}

export default WalletForm;
