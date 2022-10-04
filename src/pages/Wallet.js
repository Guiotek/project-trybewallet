import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { RequestApi } from '../redux/actions';

class Wallet extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(RequestApi());
  }

  render() {
    const { user: { email }, wallet: { currencies, loading } } = this.props;
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
        {

          loading ? <p>carregando</p> : (
            <div>
              <label htmlFor="valor">
                Valor:
                <input type="number" data-testid="value-input" id="valor" />
              </label>
              <label htmlFor="description">
                Descrição:
                <input type="text" data-testid="description-input" id="description" />
              </label>
              <label htmlFor="selectOne">
                Moeda:
                <select id="selectOne" data-testid="currency-input">
                  {currencies.map((e, i) => (
                    <option key={ i }>{e}</option>
                  ))}
                </select>
              </label>
              Metodo De Pagamento:
              <label htmlFor="selectTwo">
                <select id="select" data-testid="method-input">
                  <option>Dinheiro</option>
                  <option>Cartão de crédito</option>
                  <option>Cartão de débito</option>
                </select>
              </label>
              <label htmlFor="selectThree">
                categoria:
                <select id="selectThree" data-testid="tag-input">
                  <option>Alimentação</option>
                  <option>Lazer</option>
                  <option>Trabalho</option>
                  <option>Transporte</option>
                  <option>Saúde</option>

                </select>
              </label>
            </div>
          )
        }
      </div>
    );
  }
}

Wallet.propTypes = {
  user: PropTypes.object,
}.isRequired;

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, null)(Wallet);
